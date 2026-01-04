// 타입별 색상 및 이름 정의
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
  normal: '노말', fire: '불꽃', water: '물', grass: '풀', electric: '전기',
  ice: '얼음', fighting: '격투', poison: '독', ground: '땅', flying: '비행',
  psychic: '에스퍼', bug: '벌레', rock: '바위', ghost: '고스트', dragon: '드래곤',
  dark: '악', steel: '강철', fairy: '페어리',
};

const evolutionCategoryColors = {
  LV: 'text-blue-600', ITEM: 'text-green-600', TRADE: 'text-purple-600',
  TRADE_WITH_ITEM: 'text-purple-600', ETC: 'text-orange-600', NONE: 'text-gray-500'
};

// --- DOM 요소 참조 ---
const searchOptionSelect = document.getElementById('search-option-select');
const searchInput = document.getElementById('search-input');
const gridContainer = document.getElementById('pokemon-list');
const resetCaughtBtn = document.getElementById('reset-caught-btn');

// --- 상태 관리 ---
let caughtPokemon = new Set(JSON.parse(localStorage.getItem('caughtPokemon')) || []);

// --- 헬퍼 함수 ---

/**
 * 타입 배지 HTML 문자열을 생성합니다.
 * @param {string[]} types - 타입 문자열 배열
 * @returns {string} HTML 문자열
 */
function createTypeBadgesHtml(types) {
  return types.map(type => {
    const colorClass = typeColors[type] || 'bg-gray-200 text-gray-800';
    const typeName = typeNamesKo[type] || type;
    return `<span class="inline-block px-2 py-1 text-xs font-semibold ${colorClass} rounded-full">${typeName}</span>`;
  }).join(' ');
}

/**
 * 개별 포켓몬 카드 DOM 요소를 생성합니다.
 * @param {object} pokemon - 포켓몬 데이터 객체
 * @returns {HTMLElement} 생성된 카드 요소
 */
function createPokemonCard(pokemon) {
  const card = document.createElement('div');
  const isCaught = caughtPokemon.has(pokemon.id);

  // 검색 및 필터링을 위한 데이터 속성 설정
  card.className = `pokemon-card relative bg-white rounded-lg shadow-md overflow-hidden ${isCaught ? 'is-caught' : ''}`;
  card.dataset.pokemonId = pokemon.id;
  card.dataset.name = pokemon.name.toLowerCase();
  card.dataset.types = pokemon.types.join(',');
  card.dataset.typesKo = pokemon.types.map(t => typeNamesKo[t] || '').join(',');
  card.dataset.evolution = pokemon.evolution.text.toLowerCase();

  // HTML 컨텐츠 생성
  const typesHtml = createTypeBadgesHtml(pokemon.types);
  const weaknessesHtml = createTypeBadgesHtml(pokemon.weaknesses || []);
  const evolutionColorClass = evolutionCategoryColors[pokemon.evolution.category] || 'text-gray-500';
  const wikiUrl = `https://pokemon.fandom.com/ko/wiki/${pokemon.name}_(포켓몬)`;

  card.innerHTML = `
    <div class="absolute top-2 right-2 z-10">
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

  // '잡음' 상태 토글 이벤트 리스너 추가
  const toggle = card.querySelector(`#toggle-${pokemon.id}`);
  toggle.addEventListener('change', () => toggleCaughtStatus(pokemon.id, card));

  return card;
}


// --- 이벤트 핸들러 및 주요 기능 ---

/**
 * 포켓몬의 '잡음' 상태를 토글하고 localStorage에 저장합니다.
 * @param {number} pokemonId - 포켓몬 ID
 * @param {HTMLElement} cardElement - 대상 카드 요소
 */
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

/**
 * '잡은 포켓몬' 데이터를 초기화하고 그리드를 다시 렌더링합니다.
 */
function resetCaughtData() {
  if (confirm('정말로 모든 "잡은 포켓몬" 데이터를 초기화하시겠습니까?')) {
    localStorage.removeItem('caughtPokemon');
    caughtPokemon.clear();
    renderGrid(pokemonData); // 데이터를 초기화하고 그리드를 다시 렌더링
  }
}

/**
 * 검색 입력에 따라 포켓몬 카드를 필터링합니다.
 */
function handleSearch() {
  const searchTerm = searchInput.value.toLowerCase();
  const searchColumn = searchOptionSelect.value;
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
          isMatch = card.dataset.types.includes(searchTerm) || card.dataset.typesKo.includes(searchTerm);
          break;
        case 'evolution':
          isMatch = card.dataset.evolution.includes(searchTerm);
          break;
      }
    }
    card.style.display = isMatch ? '' : 'none';
  });
}

/**
 * 포켓몬 데이터를 받아 그리드를 렌더링합니다.
 * @param {object[]} dataToRender - 렌더링할 포켓몬 데이터 배열
 */
function renderGrid(dataToRender) {
  gridContainer.innerHTML = ''; // 기존 카드 모두 제거
  dataToRender.forEach(pokemon => {
    const card = createPokemonCard(pokemon);
    gridContainer.appendChild(card);
  });
}

// --- 애플리케이션 초기화 ---
function initialize() {
  if (typeof pokemonData === 'undefined') {
    console.error('pokemonData가 정의되지 않았습니다. dex-data.js 파일이 올바르게 로드되었는지 확인하세요.');
    return;
  }
  
  renderGrid(pokemonData);
  
  // 이벤트 리스너 연결
  searchInput.addEventListener('input', handleSearch);
  searchOptionSelect.addEventListener('change', handleSearch);
  resetCaughtBtn.addEventListener('click', resetCaughtData);
}

initialize();
