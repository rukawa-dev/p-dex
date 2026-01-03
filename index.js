const typeColors = {
  normal: 'bg-gray-200 text-gray-800',
  fire: 'bg-red-200 text-red-900',
  water: 'bg-blue-200 text-blue-900',
  grass: 'bg-green-200 text-green-900',
  electric: 'bg-yellow-200 text-yellow-900',
  ice: 'bg-cyan-200 text-cyan-900',
  fighting: 'bg-red-800 text-white',
  poison: 'bg-purple-200 text-purple-900',
  ground: 'bg-yellow-600 text-white',
  flying: 'bg-indigo-200 text-indigo-900',
  psychic: 'bg-pink-200 text-pink-900',
  bug: 'bg-lime-200 text-lime-900',
  rock: 'bg-yellow-800 text-white',
  ghost: 'bg-purple-800 text-white',
  dragon: 'bg-indigo-800 text-white',
  dark: 'bg-gray-800 text-white',
  steel: 'bg-gray-400 text-gray-900',
  fairy: 'bg-pink-300 text-pink-900',
};

const typeNamesKo = {
  normal: '노말',
  fire: '불꽃',
  water: '물',
  grass: '풀',
  electric: '전기',
  ice: '얼음',
  fighting: '격투',
  poison: '독',
  ground: '땅',
  flying: '비행',
  psychic: '에스퍼',
  bug: '벌레',
  rock: '바위',
  ghost: '고스트',
  dragon: '드래곤',
  dark: '악',
  steel: '강철',
  fairy: '페어리',
};

const evolutionCategoryColors = {
    LV: 'text-blue-600',
    ITEM: 'text-green-600',
    TRADE: 'text-purple-600',
    ETC: 'text-orange-600',
    NONE: 'text-gray-500'
};

const searchOptions = document.querySelectorAll('input[name="search-option"]');
const searchInput = document.getElementById('search-input');
const gridContainer = document.getElementById('pokemon-list');

function renderGrid(dataToRender) {
  gridContainer.innerHTML = ''; // Clear existing cards

  dataToRender.forEach(pokemon => {
    const cardLink = document.createElement('a');
    cardLink.href = `https://pokemon.fandom.com/ko/wiki/${pokemon.name}_(포켓몬)`;
    cardLink.target = '_blank';
    cardLink.rel = 'noopener noreferrer';
    cardLink.className = 'relative block bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-200';

    const typesHtml = pokemon.types.map(type => {
        const colorClass = typeColors[type] || 'bg-gray-200 text-gray-800';
        const typeName = typeNamesKo[type] || type;
        return `<span class="inline-block px-2 py-1 text-xs font-semibold ${colorClass} rounded-full">${typeName}</span>`;
    }).join(' ');

    const weaknessesHtml = (pokemon.weaknesses || []).map(type => {
        const colorClass = typeColors[type] || 'bg-gray-200 text-gray-800';
        const typeName = typeNamesKo[type] || type;
        return `<span class="inline-block px-2 py-1 text-xs font-semibold ${colorClass} rounded-full">${typeName}</span>`;
    }).join(' ');

    const evolutionColorClass = evolutionCategoryColors[pokemon.evolution.category] || 'text-gray-500';

    cardLink.innerHTML = `
        <p class="absolute top-2 left-3 text-sm text-gray-400 font-bold font-mono">#${pokemon.id}</p>
        <div class="p-4 pt-8 bg-gray-50 flex flex-col items-center justify-center">
            <img src="${pokemon.image}" alt="${pokemon.name}" class="w-24 h-24" loading="lazy">
            <h3 class="text-lg font-bold text-gray-800 mt-2">${pokemon.name}</h3>
        </div>
        <div class="p-4 space-y-3">
            <div>
                <h4 class="text-xs font-bold text-gray-500 uppercase mb-1">타입</h4>
                <div class="flex flex-wrap gap-1">${typesHtml}</div>
            </div>
            <div>
                <h4 class="text-xs font-bold text-gray-500 uppercase mb-1">약점</h4>
                <div class="flex flex-wrap gap-1">${weaknessesHtml}</div>
            </div>
            <div>
                <h4 class="text-xs font-bold text-gray-500 uppercase mb-1">진화 조건</h4>
                <p class="text-sm ${evolutionColorClass} font-semibold">${pokemon.evolution.text}</p>
            </div>
        </div>
    `;
    
    gridContainer.appendChild(cardLink);
  });
}

function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const searchColumn = document.querySelector('input[name="search-option"]:checked').value;

    if (!searchTerm) {
        renderGrid(pokemonData);
        return;
    }

    const filteredData = pokemonData.filter(pokemon => {
        switch (searchColumn) {
            case 'id':
                return String(pokemon.id).includes(searchTerm);
            case 'name':
                return pokemon.name.toLowerCase().includes(searchTerm);
            case 'type':
                return pokemon.types.some(type => 
                    type.toLowerCase().includes(searchTerm) || 
                    (typeNamesKo[type] && typeNamesKo[type].toLowerCase().includes(searchTerm))
                );
            case 'evolution':
                return pokemon.evolution.text.toLowerCase().includes(searchTerm);
            default:
                return false;
        }
    });

    renderGrid(filteredData);
}

// Initial render
if (typeof pokemonData !== 'undefined') {
    renderGrid(pokemonData);
    searchInput.addEventListener('input', handleSearch);
    searchOptions.forEach(radio => radio.addEventListener('change', handleSearch));
} else {
    console.error('pokemonData is not defined. Make sure dex-data.js is loaded.');
}