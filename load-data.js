const fs = require('fs');

const POKEMON_COUNT = 3; // 테스트용 3마리
const API_URL = 'https://pokeapi.co/api/v2';

async function fetchPokemonData(id) {
  try {
    console.log(`Fetching data for Pokemon #${id}...`);
    
    // 기본 정보
    const response = await fetch(`${API_URL}/pokemon/${id}`);
    if (!response.ok) throw new Error(`Failed to fetch pokemon ${id}`);
    const data = await response.json();

    // 종 정보 (한국어 이름, 진화 체인 URL)
    const speciesResponse = await fetch(`${API_URL}/pokemon-species/${id}`);
    if (!speciesResponse.ok) throw new Error(`Failed to fetch species ${id}`);
    const speciesData = await speciesResponse.json();

    const koreanName = speciesData.names.find(name => name.language.name === 'ko')?.name || data.name;
    
    // 진화 정보
    let evolutionCondition = '-';
    if (speciesData.evolution_chain) {
        const evoResponse = await fetch(speciesData.evolution_chain.url);
        const evoData = await evoResponse.json();
        evolutionCondition = parseEvolution(evoData.chain, data.name);
    }

    return {
      id: data.id,
      name: koreanName,
      types: data.types.map(t => t.type.name),
      evolution: evolutionCondition
    };
  } catch (error) {
    console.error(`Error fetching pokemon ${id}:`, error);
    return null;
  }
}

function parseEvolution(chain, currentName) {
    // 1단계 (기본)
    if (chain.species.name === currentName) {
        return '-';
    }
    
    // 2단계
    for (const evo of chain.evolves_to) {
        if (evo.species.name === currentName) {
            return formatEvolutionDetails(evo.evolution_details[0]);
        }
        // 3단계
        for (const evo2 of evo.evolves_to) {
            if (evo2.species.name === currentName) {
                return formatEvolutionDetails(evo2.evolution_details[0]);
            }
        }
    }
    return '-';
}

function formatEvolutionDetails(details) {
    if (!details) return '-';
    if (details.min_level) return `Lv.${details.min_level}`;
    return '특수 조건';
}

async function generateData() {
  const allPokemon = [];
  
  for (let i = 1; i <= POKEMON_COUNT; i++) {
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
