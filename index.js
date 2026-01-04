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
    TRADE_WITH_ITEM: 'text-purple-600', // 아이템을 지니고 통신교환
    ETC: 'text-orange-600',
    NONE: 'text-gray-500'
};

const searchOptions = document.querySelectorAll('input[name="search-option"]');
const searchInput = document.getElementById('search-input');
const gridContainer = document.getElementById('pokemon-list');
const resetCaughtBtn = document.getElementById('reset-caught-btn');

// --- '잡은 포켓몬' 관련 로직 ---
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
        // 전체 카드를 다시 렌더링하지 않고 시각적으로만 업데이트합니다.
        document.querySelectorAll('.pokemon-card').forEach(card => {
            card.classList.remove('is-caught');
            const checkbox = card.querySelector('.toggle-checkbox');
            if (checkbox) {
                checkbox.checked = false;
            }
        });
    }
}
// --- 로직 끝 ---

function renderGrid(dataToRender) {
  gridContainer.innerHTML = ''; // 기존 카드를 모두 지웁니다.

  dataToRender.forEach(pokemon => {
    const card = document.createElement('div');
    const isCaught = caughtPokemon.has(pokemon.id);
    
    // 필터링을 위한 공통 클래스 및 데이터 속성을 추가합니다.
    card.className = `pokemon-card relative bg-white rounded-lg shadow-md overflow-hidden ${isCaught ? 'is-caught' : ''}`;
    card.dataset.pokemonId = pokemon.id;
    card.dataset.name = pokemon.name.toLowerCase();
    card.dataset.types = pokemon.types.join(',');
    card.dataset.typesKo = pokemon.types.map(t => typeNamesKo[t] || '').join(',');
    card.dataset.evolution = pokemon.evolution.text.toLowerCase();


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

    // 토글 스위치에 이벤트 리스너를 추가합니다.
    const toggle = card.querySelector(`#toggle-${pokemon.id}`);
    toggle.addEventListener('change', () => toggleCaughtStatus(pokemon.id, card));
  });
}

function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const searchColumn = document.querySelector('input[name="search-option"]:checked').value;
    const allCards = gridContainer.querySelectorAll('.pokemon-card');

    allCards.forEach(card => {
        let isMatch = false;
        if (!searchTerm) {
            isMatch = true;
        } else {
            switch (searchColumn) {
                case 'id':
                    isMatch = card.dataset.pokemonId.includes(searchTerm);
                    break;
                case 'name':
                    isMatch = card.dataset.name.includes(searchTerm);
                    break;
                case 'type':
                    const types = card.dataset.types.split(',');
                    const typesKo = card.dataset.typesKo.split(',');
                    isMatch = types.some(t => t.includes(searchTerm)) || typesKo.some(t => t.includes(searchTerm));
                    break;
                case 'evolution':
                    isMatch = card.dataset.evolution.includes(searchTerm);
                    break;
            }
        }
        
        card.style.display = isMatch ? '' : 'none';
    });
}

// 초기 렌더링
if (typeof pokemonData !== 'undefined') {
    renderGrid(pokemonData);
    searchInput.addEventListener('input', handleSearch);
    searchOptions.forEach(radio => radio.addEventListener('change', handleSearch));
    resetCaughtBtn.addEventListener('click', resetCaughtData);
} else {
    console.error('pokemonData가 정의되지 않았습니다. dex-data.js 파일이 올바르게 로드되었는지 확인하세요.');
}