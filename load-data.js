const fs = require('fs');

const API_URL = 'https://pokeapi.co/api/v2';

// 인자 파싱 (예: node load-data.js 1-10)
const args = process.argv.slice(2);
let startId = 1;
let endId = 3; // 기본값

if (args.length > 0) {
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

console.log(`Generating data for Pokemon #${startId} to #${endId}`);

// 한국어 이름 가져오기 헬퍼 함수
async function getKoreanName(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) return '???';
        const data = await response.json();
        return data.names.find(name => name.language.name === 'ko')?.name || data.name;
    } catch (error) {
        console.error('Error fetching korean name:', error);
        return '???';
    }
}

async function fetchPokemonData(id) {
  try {
    console.log(`Fetching data for Pokemon #${id}...`);
    
    // 기본 정보
    const response = await fetch(`${API_URL}/pokemon/${id}`);
    if (!response.ok) throw new Error(`Failed to fetch pokemon ${id}`);
    const data = await response.json();

    // 종 정보
    const speciesResponse = await fetch(`${API_URL}/pokemon-species/${id}`);
    if (!speciesResponse.ok) throw new Error(`Failed to fetch species ${id}`);
    const speciesData = await speciesResponse.json();

    const koreanName = speciesData.names.find(name => name.language.name === 'ko')?.name || data.name;
    
    // 진화 정보 파싱
    let evolutionCondition = '-';
    if (speciesData.evolution_chain) {
        const evoResponse = await fetch(speciesData.evolution_chain.url);
        const evoData = await evoResponse.json();
        evolutionCondition = await parseEvolution(evoData.chain, data.name);
    }

    // 출현 장소 정보 (첫 번째 장소만)
    let locationName = '-';
    const encountersResponse = await fetch(`${API_URL}/pokemon/${id}/encounters`);
    if (encountersResponse.ok) {
        const encountersData = await encountersResponse.json();
        if (encountersData.length > 0) {
            // location_area의 한국어 이름을 가져옴
            locationName = await getKoreanName(encountersData[0].location_area.url);
        }
    }

    return {
      id: data.id,
      name: koreanName,
      types: data.types.map(t => t.type.name),
      evolution: evolutionCondition,
      location: locationName
    };
  } catch (error) {
    console.error(`Error fetching pokemon ${id}:`, error);
    return null;
  }
}

async function parseEvolution(chain, currentName) {
    // 1단계 (기본형)
    if (chain.species.name === currentName) {
        return '-';
    }
    
    // 2단계 탐색
    for (const evo of chain.evolves_to) {
        if (evo.species.name === currentName) {
            const preEvoName = await getKoreanName(chain.species.url);
            const details = formatEvolutionDetails(evo.evolution_details[0]);
            return `${preEvoName} ${details}`;
        }
        
        // 3단계 탐색
        for (const evo2 of evo.evolves_to) {
            if (evo2.species.name === currentName) {
                const preEvoName = await getKoreanName(evo.species.url);
                const details = formatEvolutionDetails(evo2.evolution_details[0]);
                return `${preEvoName} ${details}`;
            }
        }
    }
    return '-';
}

function formatEvolutionDetails(details) {
    if (!details) return '';
    
    const conditions = [];
    
    if (details.min_level) conditions.push(`Lv.${details.min_level}`);
    if (details.item) conditions.push(`아이템 사용`);
    if (details.trigger?.name === 'trade') conditions.push('통신교환');
    if (details.min_happiness) conditions.push(`친밀도 ${details.min_happiness}`);
    if (details.known_move_type) conditions.push(`특정 기술 보유`);
    
    if (conditions.length === 0) return '특수 조건';
    return conditions.join(', ');
}

async function generateData() {
  const allPokemon = [];
  
  for (let i = startId; i <= endId; i++) {
    const pokemon = await fetchPokemonData(i);
    if (pokemon) {
      allPokemon.push(pokemon);
    }
  }

  const fileContent = `const pokemonData = ${JSON.stringify(allPokemon, null, 2)};`;
  
  fs.writeFileSync('dex-data.js', fileContent);
  console.log('Successfully generated dex-data.js');
}

generateData();