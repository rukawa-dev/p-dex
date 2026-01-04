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
const resetCaughtBtn = document.getElementById('reset-caught-btn');

// --- 'Caught' Pokemon Logic ---
let caughtPokemon = new Set(JSON.parse(localStorage.getItem('caughtPokemon')) || []);

function toggleCaughtStatus(pokemonId, cardElement) {
    if (caughtPokemon.has(pokemonId)) {
        caughtPokemon.delete(pokemonId);
        cardElement.classList.remove('is-caught');
    } else {
        caughtPokemon.add(pokemonId);
        cardElement.classList.add('is-caught');
    }
    localStorage.setItem('caughtPokemon', JSON.stringify(Array.from(caughtPokemon)));
}

function resetCaughtData() {
    if (confirm('정말로 모든 "잡은 포켓몬" 데이터를 초기화하시겠습니까?')) {
        localStorage.removeItem('caughtPokemon');
        caughtPokemon.clear();
        handleSearch(); // Re-render the grid to reflect the changes
    }
}
// --- End Logic ---

function renderGrid(dataToRender) {
  gridContainer.innerHTML = ''; // Clear existing cards

  dataToRender.forEach(pokemon => {
    const card = document.createElement('div');
    const isCaught = caughtPokemon.has(pokemon.id);
    card.className = `relative bg-white rounded-lg shadow-md overflow-hidden ${isCaught ? 'is-caught' : ''}`;
    card.dataset.pokemonId = pokemon.id;

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
    const wikiUrl = `https://pokemon.fandom.com/ko/wiki/${pokemon.name}_(포켓몬)`;

    card.innerHTML = `
        <div class="absolute top-2 right-2">
            <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                <input type="checkbox" name="toggle" id="toggle-${pokemon.id}" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" ${isCaught ? 'checked' : ''}/>
                <label for="toggle-${pokemon.id}" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
            </div>
        </div>
        <p class="absolute top-2 left-3 text-sm text-gray-400 font-bold font-mono">#${pokemon.id}</p>
        <div class="img-box-56319e8e p-4 pt-8 bg-gray-50 flex flex-col items-center justify-center">
            <img src="${pokemon.image}" alt="${pokemon.name}" class="w-24 h-24 pokemon-image" loading="lazy">
            <a href="${wikiUrl}" target="_blank" rel="noopener noreferrer" class="group inline-flex items-center mt-2">
                <h3 class="text-lg font-bold text-gray-800 group-hover:underline">${pokemon.name}</h3>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 text-gray-400 group-hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
            </a>
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
    
    gridContainer.appendChild(card);

    // Add event listener to the toggle
    const toggle = card.querySelector(`#toggle-${pokemon.id}`);
    toggle.addEventListener('change', () => toggleCaughtStatus(pokemon.id, card));
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
    resetCaughtBtn.addEventListener('click', resetCaughtData);
} else {
    console.error('pokemonData is not defined. Make sure dex-data.js is loaded.');
}