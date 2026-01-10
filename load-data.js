const fs = require('fs');
const path = require('path');

const API_URL = 'https://pokeapi.co/api/v2';
const CACHE_DIR = path.join(__dirname, 'cache');
let FORCE_REFRESH = false;

// --- 캐시 관련 로직 ---
async function fetchWithCache(url) {
    const urlObj = new URL(url);
    // /api/v2 제거
    const pathname = urlObj.pathname.replace('/api/v2', '');
    // 쿼리스트링 ? -> _
    const search = urlObj.search.replace('?', '_');

    const parts = pathname.split('/').filter(p => p);

    let dirPath = CACHE_DIR;
    let fileName = 'index';

    if (parts.length > 0) {
        fileName = parts.pop();
        dirPath = path.join(CACHE_DIR, ...parts);
    }

    const cacheFile = path.join(dirPath, fileName + search + '.json');

    if (!FORCE_REFRESH && fs.existsSync(cacheFile)) {
        try {
            const content = fs.readFileSync(cacheFile, 'utf-8');
            const data = JSON.parse(content);
            return {
                ok: true,
                json: async () => data
            };
        } catch (e) {
            // 진행바가 깨지지 않도록 줄바꿈 추가
            console.warn(`\n[CACHE] Failed to read cache for ${url}, fetching...`);
        }
    }

    // console.log(`[API] Fetching: ${url}`);
    const response = await fetch(url);
    if (!response.ok) return response;

    const data = await response.json();

    try {
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }
        fs.writeFileSync(cacheFile, JSON.stringify(data, null, 2));
    } catch (e) {
        console.error(`\n[CACHE] Failed to write cache for ${url}:`, e);
    }

    return {
        ok: true,
        json: async () => data
    };
}

// --- 타입 상성 관련 로직 ---
const ALL_TYPES = [
    'normal', 'fire', 'water', 'electric', 'grass', 'ice',
    'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug',
    'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy'
];
const typeRelationsCache = new Map();

async function fetchAllTypeRelations() {
    console.log('Fetching all type relations...');
    await Promise.all(ALL_TYPES.map(async (type) => {
        const response = await fetchWithCache(`${API_URL}/type/${type}`);
        const data = await response.json();
        typeRelationsCache.set(type, data.damage_relations);
    }));
    console.log('All type relations cached.');
}

function calculateWeaknesses(pokemonTypes) {
    const multipliers = {};
    ALL_TYPES.forEach(t => multipliers[t] = 1);

    pokemonTypes.forEach(type => {
        const relations = typeRelationsCache.get(type);
        if (relations) {
            relations.double_damage_from.forEach(t => multipliers[t.name] *= 2);
            relations.half_damage_from.forEach(t => multipliers[t.name] *= 0.5);
            relations.no_damage_from.forEach(t => multipliers[t.name] *= 0);
        }
    });

    return Object.entries(multipliers)
        .filter(([, multiplier]) => multiplier >= 2)
        .map(([type]) => type);
}
// --- 로직 끝 ---

// 한국어 이름 가져오기 헬퍼 함수
async function getKoreanName(url) {
    try {
        const response = await fetchWithCache(url);
        if (!response.ok) return null;
        const data = await response.json();
        return data.names.find(name => name.language.name === 'ko')?.name || data.name;
    } catch (error) {
        return null;
    }
}

async function fetchPokemonData(id) {
    try {
        // console.log 제거됨

        const response = await fetchWithCache(`${API_URL}/pokemon/${id}`);
        if (!response.ok) throw new Error(`Failed to fetch pokemon ${id}`);
        const data = await response.json();

        const speciesResponse = await fetchWithCache(`${API_URL}/pokemon-species/${id}`);
        if (!speciesResponse.ok) throw new Error(`Failed to fetch species ${id}`);
        const speciesData = await speciesResponse.json();

        const koreanName = speciesData.names.find(name => name.language.name === 'ko')?.name || data.name;

        let evolutionCondition = { text: '-', category: 'NONE' };
        if (speciesData.evolution_chain) {
            const evoResponse = await fetchWithCache(speciesData.evolution_chain.url);
            const evoData = await evoResponse.json();
            evolutionCondition = await parseEvolution(evoData.chain, data.name);
        }

        const types = data.types.map(t => t.type.name);
        const weaknesses = calculateWeaknesses(types);

        const imageUrl = data.sprites.other['official-artwork'].front_default;

        const varieties = [];
        if (speciesData.varieties) {
            for (const v of speciesData.varieties) {
                if (v.is_default) continue;

                try {
                    const varResponse = await fetchWithCache(v.pokemon.url);
                    if (!varResponse.ok) continue;
                    const varData = await varResponse.json();

                    const varImage = varData.sprites.other['official-artwork'].front_default;
                    if (!varImage) continue;

                    const formName = getFormNameKo(v.pokemon.name, koreanName);

                    varieties.push({
                        name: formName,
                        formType: v.pokemon.name.replace(speciesData.name + '-', ''),
                        types: varData.types.map(t => t.type.name),
                        image: varImage
                    });
                } catch (e) {
                    console.warn(`Failed to fetch variety ${v.pokemon.name}:`, e);
                }
            }
        }

        return {
            id: data.id,
            name: koreanName,
            types: types,
            weaknesses: weaknesses,
            evolution: evolutionCondition,
            image: imageUrl || `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`,
            forms: varieties.length > 0 ? varieties : undefined
        };
    } catch (error) {
        console.error(`\nError fetching pokemon ${id}:`, error);
        return null;
    }
}

async function parseEvolution(chain, currentName) {
    if (chain.species.name === currentName) return { text: '-', category: 'NONE' };

    for (const evo of chain.evolves_to) {
        if (evo.species.name === currentName) {
            const preEvoName = await getKoreanName(chain.species.url);
            const details = await formatEvolutionDetails(evo.evolution_details[0]);
            return { text: `${preEvoName} ${details.text}`, category: details.category };
        }
        for (const evo2 of evo.evolves_to) {
            if (evo2.species.name === currentName) {
                const preEvoName = await getKoreanName(evo.species.url);
                const details = await formatEvolutionDetails(evo2.evolution_details[0]);
                return { text: `${preEvoName} ${details.text}`, category: details.category };
            }
        }
    }
    return { text: '-', category: 'NONE' };
}

async function formatEvolutionDetails(details) {
    if (!details) return { text: '특수 조건', category: 'ETC' };

    // 1. 아이템 사용 (진화의돌 등)
    if (details.item) {
        const itemName = await getKoreanName(details.item.url) || '아이템';
        return { text: `${itemName} 사용`, category: 'ITEM' };
    }

    // 2. 통신 교환 (아이템 소지 여부 확인)
    if (details.trigger?.name === 'trade') {
        if (details.held_item) {
            const itemName = await getKoreanName(details.held_item.url) || '아이템';
            return { text: `${itemName} 지니고 통신교환`, category: 'TRADE_WITH_ITEM' };
        }
        return { text: '통신교환', category: 'TRADE' };
    }

    // 3. 아이템 지니고 레벨업
    if (details.held_item) {
        const itemName = await getKoreanName(details.held_item.url) || '아이템';
        let text = `${itemName} 지니고 레벨업`;
        if (details.time_of_day === 'day') text += ' (낮)';
        if (details.time_of_day === 'night') text += ' (밤)';
        return { text: text, category: 'ITEM' };
    }

    // 4. 레벨업 및 친밀도
    if (details.min_level) {
        // 레벨업 조건에 추가 조건이 있는 경우 (예: 비올때)
        if (details.needs_overworld_rain) return { text: `Lv.${details.min_level} (비)`, category: 'LV' };
        return { text: `Lv.${details.min_level}`, category: 'LV' };
    }

    if (details.min_happiness) {
        let text = '친밀도 높음';
        if (details.time_of_day === 'day') text += ' (낮)';
        if (details.time_of_day === 'night') text += ' (밤)';
        return { text: text, category: 'ETC' };
    }

    return { text: '특수 조건', category: 'ETC' };
}

async function main() {
    const rawArgs = process.argv.slice(2);
    const args = rawArgs.filter(arg => arg !== '--refresh');
    if (rawArgs.includes('--refresh')) {
        FORCE_REFRESH = true;
        console.log('Force refresh enabled. Ignoring cache.');
    }

    let startId = 1;
    let endId = 151; // 기본값으로 1세대 포켓몬만 설정

    if (args.length > 0) {
        if (args[0] === 'all') {
            console.log('Fetching total pokemon count...');
            const response = await fetchWithCache(`${API_URL}/pokemon-species?limit=1`);
            const data = await response.json();
            startId = 1;
            endId = data.count;
        } else {
            const range = args[0].split('-');
            if (range.length === 2) {
                startId = parseInt(range[0]);
                endId = parseInt(range[1]);
            } else {
                const singleId = parseInt(args[0]);
                if (!isNaN(singleId)) {
                    startId = singleId;
                    endId = singleId;
                }
            }
        }
    }

    console.log(`Generating data for Pokemon #${startId} to #${endId}`);

    await fetchAllTypeRelations();

    const allPokemon = [];
    const totalCount = endId - startId + 1;
    let processedCount = 0;

    for (let i = startId; i <= endId; i++) {
        const pokemon = await fetchPokemonData(i);
        if (pokemon) allPokemon.push(pokemon);

        processedCount++;
        const percent = Math.round((processedCount / totalCount) * 100);
        process.stdout.write(`\r[${processedCount}/${totalCount}] ${percent}%`);
    }
    process.stdout.write('\n'); // 완료 후 줄바꿈

    // pokemon.json 파일로 저장하도록 수정
    const fileContent = JSON.stringify(allPokemon, null, 2);
    fs.writeFileSync('pokemon.json', fileContent);
    console.log(`Successfully generated pokemon.json for ${allPokemon.length} Pokemon.`);
}


function getFormNameKo(formSlug, baseName) {
    if (formSlug.includes('-mega')) {
        let name = '메가' + baseName;
        if (formSlug.endsWith('-x')) name += ' X';
        if (formSlug.endsWith('-y')) name += ' Y';
        return name;
    }
    if (formSlug.includes('-gmax')) return '거다이맥스 ' + baseName;
    if (formSlug.includes('-alola')) return '알로라 ' + baseName;
    if (formSlug.includes('-galar')) return '가라르 ' + baseName;
    if (formSlug.includes('-hisui')) return '히스이 ' + baseName;
    if (formSlug.includes('-paldea')) return '팔데아 ' + baseName;
    if (formSlug.includes('-origin')) return baseName + ' (오리진폼)';
    if (formSlug.includes('-therian')) return baseName + ' (영물폼)';
    if (formSlug.includes('-sky')) return baseName + ' (스카이폼)';
    if (formSlug.includes('-attack')) return baseName + ' (공격폼)';
    if (formSlug.includes('-defense')) return baseName + ' (방어폼)';
    if (formSlug.includes('-speed')) return baseName + ' (스피드폼)';
    if (formSlug.includes('-sandy')) return baseName + ' (모래땅할머니)';
    if (formSlug.includes('-trash')) return baseName + ' (쓰레기담요)';
    if (formSlug.includes('-ice')) return baseName + ' (아이스)';
    if (formSlug.includes('-black')) return '블랙 ' + baseName;
    if (formSlug.includes('-white')) return '화이트 ' + baseName;
    if (formSlug.includes('-crowned')) return baseName + ' (검왕/방패왕)';
    return baseName + ' (폼 체인지)';
}

main();