const fs = require('fs');

const API_URL = 'https://pokeapi.co/api/v2';

// 인자 파싱
const args = process.argv.slice(2);
let startId = 1;
let endId = 3; 

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
        if (!response.ok) return null;
        const data = await response.json();
        return data.names.find(name => name.language.name === 'ko')?.name || data.name;
    } catch (error) {
        return null;
    }
}

async function fetchPokemonData(id) {
  try {
    console.log(`Fetching data for Pokemon #${id}...`);
    
    const response = await fetch(`${API_URL}/pokemon/${id}`);
    if (!response.ok) throw new Error(`Failed to fetch pokemon ${id}`);
    const data = await response.json();

    const speciesResponse = await fetch(`${API_URL}/pokemon-species/${id}`);
    if (!speciesResponse.ok) throw new Error(`Failed to fetch species ${id}`);
    const speciesData = await speciesResponse.json();

    const koreanName = speciesData.names.find(name => name.language.name === 'ko')?.name || data.name;
    
    let evolutionCondition = { text: '-', category: 'NONE' };
    if (speciesData.evolution_chain) {
        const evoResponse = await fetch(speciesData.evolution_chain.url);
        const evoData = await evoResponse.json();
        evolutionCondition = await parseEvolution(evoData.chain, data.name);
    }

    return {
      id: data.id,
      name: koreanName,
      types: data.types.map(t => t.type.name),
      evolution: evolutionCondition,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`
    };
  } catch (error) {
    console.error(`Error fetching pokemon ${id}:`, error);
    return null;
  }
}

async function parseEvolution(chain, currentName) {
    if (chain.species.name === currentName) {
        return { text: '-', category: 'NONE' };
    }
    
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

    if (details.min_level) {
        return { text: `Lv.${details.min_level}`, category: 'LV' };
    }
    if (details.item) {
        const itemName = await getKoreanName(details.item.url) || '아이템';
        return { text: `${itemName} 사용`, category: 'ITEM' };
    }
    if (details.trigger?.name === 'trade') {
        return { text: '통신교환', category: 'TRADE' };
    }
    if (details.min_happiness) {
        return { text: '친밀도 높음', category: 'ETC' };
    }
    
    return { text: '특수 조건', category: 'ETC' };
}

async function generateData() {
  const allPokemon = [];
  for (let i = startId; i <= endId; i++) {
    const pokemon = await fetchPokemonData(i);
    if (pokemon) allPokemon.push(pokemon);
  }
  const fileContent = `const pokemonData = ${JSON.stringify(allPokemon, null, 2)};`;
  fs.writeFileSync('dex-data.js', fileContent);
  console.log('Successfully generated dex-data.js');
}

generateData();