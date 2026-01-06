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
const toggleCaughtBtn = document.getElementById('toggle-caught-btn');
const toggleCaughtText = document.getElementById('toggle-caught-text');
const iconEye = document.getElementById('icon-eye');
const iconEyeOff = document.getElementById('icon-eye-off');
const dexButtons = document.querySelectorAll('.dex-btn'); // 모든 도감 버튼 선택

// 검색 내비게이션 요소
const searchNavControls = document.getElementById('search-nav-controls');
const searchCounter = document.getElementById('search-counter');
const searchPrevBtn = document.getElementById('search-prev-btn');
const searchNextBtn = document.getElementById('search-next-btn');

// --- 상태 관리 ---
let caughtPokemon = new Set(); // 잡은 포켓몬 데이터 (도감별로 동적 로드)
let isHideCaught = localStorage.getItem('isHideCaught') === 'true';
let currentPokemonData = []; // 현재 로드된 포켓몬 데이터를 저장할 배열
let currentDexType = 'national'; // 현재 선택된 도감 타입
let isNationalDex = true; // 현재 전국도감인지 여부

// 검색 결과 이동 관련 상태
let matchedCards = [];
let currentMatchIndex = -1;

// --- 헬퍼 함수 ---

/**
 * 현재 활성화된 도감의 이름을 반환합니다.
 * @returns {string} 도감 이름
 */
function getActiveDexName() {
    const activeButton = document.querySelector('.dex-btn.bg-indigo-100');
    if (activeButton) {
        // 버튼 안의 span 요소에서 텍스트를 가져옵니다.
        const span = activeButton.querySelector('span');
        if (span) return span.textContent.trim();
    }
    // 비상시 기본값
    return '현재';
}


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
 * @param {number} index - 리스트 내 순서 (0부터 시작)
 * @returns {HTMLElement} 생성된 카드 요소
 */
function createPokemonCard(pokemon, index) {
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
  
  // 도감 번호 표시 로직 (전국도감일 때는 숨김, 그 외에는 순서 번호 표시)
  const listNumHtml = isNationalDex ? '' : `<span class="list-num-b4d752de text-gray-500 mr-1">No.${index + 1}</span>`;
  
  card.innerHTML = `
    <div class="absolute top-2 right-2 z-10">
      <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
        <input type="checkbox" name="toggle" id="toggle-${pokemon.id}" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" ${isCaught ? 'checked' : ''}/>
        <label for="toggle-${pokemon.id}" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
      </div>
    </div>
    <p class="absolute top-2 left-3 text-sm text-gray-400 font-bold font-mono flex items-center">
      ${listNumHtml}
      <span class="text-xs text-green-600">#${pokemon.id}</span>
    </p>
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
  // 현재 도감 타입에 맞는 키를 사용하여 저장
  const key = `caughtPokemon_${currentDexType}`;
  localStorage.setItem(key, JSON.stringify(Array.from(caughtPokemon)));
  
  // 숨기기 옵션이 켜져 있다면, 상태 변경 시 즉시 반영
  if (isHideCaught) {
    handleSearch();
  }
}

/**
 * '잡은 포켓몬' 데이터를 초기화하고 그리드를 다시 렌더링합니다.
 */
function resetCaughtData() {
  const dexName = getActiveDexName();
  if (confirm(`정말로 '${dexName}' 도감의 "잡은 포켓몬" 데이터를 초기화하시겠습니까?`)) {
    const key = `caughtPokemon_${currentDexType}`;
    localStorage.removeItem(key);
    caughtPokemon.clear();
    renderGrid(currentPokemonData); // 현재 로드된 데이터로 그리드를 다시 렌더링
  }
}

/**
 * 잡은 포켓몬 숨기기/보이기 버튼의 UI를 업데이트합니다.
 */
function updateToggleBtnUI() {
  if (isHideCaught) {
    iconEye.classList.add('hidden');
    iconEyeOff.classList.remove('hidden');
    toggleCaughtText.textContent = '보이기';
    toggleCaughtBtn.classList.remove('bg-indigo-500', 'hover:bg-indigo-600', 'text-white');
    toggleCaughtBtn.classList.add('bg-gray-200', 'hover:bg-gray-300', 'text-gray-700');
  } else {
    iconEye.classList.remove('hidden');
    iconEyeOff.classList.add('hidden');
    toggleCaughtText.textContent = '숨기기';
    toggleCaughtBtn.classList.add('bg-indigo-500', 'hover:bg-indigo-600', 'text-white');
    toggleCaughtBtn.classList.remove('bg-gray-200', 'hover:bg-gray-300', 'text-gray-700');
  }
}

/**
 * 잡은 포켓몬 숨기기/보이기 상태를 토글합니다.
 */
function toggleHideCaught() {
  isHideCaught = !isHideCaught;
  localStorage.setItem('isHideCaught', isHideCaught); // 상태 저장
  
  updateToggleBtnUI();
  handleSearch();
}

/**
 * 특정 인덱스의 매칭된 카드로 이동하고 하이라이트합니다.
 * @param {number} index - 이동할 매칭 카드의 인덱스
 */
function moveToMatch(index) {
  if (matchedCards.length === 0) return;
  
  // 인덱스 순환 처리
  if (index < 0) index = matchedCards.length - 1;
  if (index >= matchedCards.length) index = 0;
  
  currentMatchIndex = index;
  
  // 모든 카드의 하이라이트 제거
  document.querySelectorAll('.pokemon-card').forEach(card => {
    card.classList.remove('ring-4', 'ring-yellow-400', 'z-20');
  });
  
  const targetCard = matchedCards[currentMatchIndex];
  
  // 타겟 카드 하이라이트 및 스크롤 (즉시 이동)
  targetCard.scrollIntoView({ behavior: 'auto', block: 'center' });
  targetCard.classList.add('ring-4', 'ring-yellow-400', 'z-20');
  
  // 카운터 업데이트
  searchCounter.textContent = `${currentMatchIndex + 1}/${matchedCards.length}`;
}

/**
 * 검색 입력 및 필터 옵션에 따라 포켓몬 카드를 필터링하거나 스크롤 이동합니다.
 */
function handleSearch() {
  const searchTerm = searchInput.value.toLowerCase();
  const searchColumn = searchOptionSelect.value;
  const allCards = gridContainer.querySelectorAll('.pokemon-card');
  
  // 검색 결과 초기화
  matchedCards = [];
  currentMatchIndex = -1;
  
  // 내비게이션 컨트롤 숨김 (flex 클래스 제거, hidden 클래스 추가)
  searchNavControls.classList.remove('flex');
  searchNavControls.classList.add('hidden');
  
  // 1. 이름 검색일 경우: 스크롤 이동 방식
  if (searchColumn === 'name') {
    allCards.forEach(card => {
      // 하이라이트 초기화
      card.classList.remove('ring-4', 'ring-yellow-400', 'z-20');

      // 잡은 포켓몬 숨기기 체크 여부 확인
      if (isHideCaught && card.classList.contains('is-caught')) {
        card.style.display = 'none';
        return;
      }
      
      // 이름 검색 모드에서는 필터링 없이 모두 보여줌
      card.style.display = '';

      // 검색어 매칭 확인
      if (searchTerm && card.dataset.name.includes(searchTerm)) {
        matchedCards.push(card);
      }
    });

    // 매칭된 결과가 있으면 내비게이션 표시 및 첫 번째 결과로 이동
    if (matchedCards.length > 0) {
      searchNavControls.classList.remove('hidden');
      searchNavControls.classList.add('flex');
      moveToMatch(0);
    }
    return;
  }

  // 2. 그 외 검색(도감번호, 타입 등): 필터링 방식
  allCards.forEach(card => {
    // 하이라이트 초기화
    card.classList.remove('ring-4', 'ring-yellow-400', 'z-20');

    // 잡은 포켓몬 숨기기 체크 여부 확인
    if (isHideCaught && card.classList.contains('is-caught')) {
      card.style.display = 'none';
      return; // 이미 숨겨졌으므로 검색어 매칭 로직 건너뜀
    }
    
    // 검색어 매칭 확인
    let isMatch = false;
    if (!searchTerm) {
      isMatch = true;
    } else {
      switch (searchColumn) {
        case 'id':
          isMatch = card.dataset.pokemonId.includes(searchTerm);
          break;
        // name은 위에서 처리됨
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
  gridContainer.innerHTML = '<p class="col-span-full text-center text-gray-500">포켓몬을 불러오는 중...</p>';
  currentPokemonData = dataToRender; // 현재 데이터 업데이트
  gridContainer.innerHTML = ''; // 기존 카드 모두 제거
  dataToRender.forEach((pokemon, index) => {
    const card = createPokemonCard(pokemon, index);
    gridContainer.appendChild(card);
  });
  // 초기 렌더링 후 현재 필터 상태(숨기기 등) 적용
  handleSearch();
}

/**
 * 특정 JSON 파일에서 포켓몬 데이터를 불러와 렌더링합니다.
 * @param {string} dataUrl - 불러올 JSON 파일 경로
 * @param {HTMLElement} activeButton - 활성화할 버튼 요소
 * @param {boolean} isNational - 전국도감 여부
 * @param {string} dexType - 도감 타입 ('national', 'za', 'za-dlc', 'paldea')
 */
async function loadPokemonData(dataUrl, activeButton, isNational, dexType) {
  try {
    gridContainer.innerHTML = '<p class="col-span-full text-center text-gray-500">데이터를 로드하고 있습니다...</p>';
    
    // 검색 필터 초기화
    searchInput.value = '';
    searchOptionSelect.value = 'name';

    // 도감 관련 상태 업데이트
    isNationalDex = isNational;
    currentDexType = dexType; // 현재 도감 타입 업데이트
    localStorage.setItem('selectedDex', dexType);
    
    // 새로운 도감의 '잡음' 데이터 불러오기
    const caughtDataKey = `caughtPokemon_${dexType}`;
    caughtPokemon = new Set(JSON.parse(localStorage.getItem(caughtDataKey)) || []);

    const response = await fetch(dataUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const pokemonData = await response.json();
    
    renderGrid(pokemonData);
    
    // 모든 버튼에서 활성 스타일 제거
    dexButtons.forEach(btn => {
      btn.classList.remove('bg-indigo-100', 'text-indigo-600');
    });
    // 현재 선택된 버튼에만 활성 스타일 추가
    if (activeButton) {
      activeButton.classList.add('bg-indigo-100', 'text-indigo-600');
    }
    
  } catch (error) {
    console.error('데이터를 불러오는 데 실패했습니다:', error);
    gridContainer.innerHTML = `<p class="col-span-full text-center text-red-500">${dataUrl} 파일을 불러오는 중 오류가 발생했습니다. 파일이 존재하는지 확인해주세요.</p>`;
  }
}

// --- 애플리케이션 초기화 ---
function initialize() {
  // 초기 UI 상태 설정
  updateToggleBtnUI();
  
  // 이벤트 리스너 연결
  searchInput.addEventListener('input', handleSearch);
  
  // 엔터키 입력 시 다음/이전 결과로 이동
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (e.shiftKey) {
        // Shift + Enter: 이전 결과로 이동
        moveToMatch(currentMatchIndex - 1);
      } else {
        // Enter: 다음 결과로 이동
        moveToMatch(currentMatchIndex + 1);
      }
    }
  });

  searchOptionSelect.addEventListener('change', handleSearch);
  toggleCaughtBtn.addEventListener('click', toggleHideCaught);
  resetCaughtBtn.addEventListener('click', resetCaughtData);
  
  // 검색 내비게이션 버튼 이벤트
  searchPrevBtn.addEventListener('click', () => moveToMatch(currentMatchIndex - 1));
  searchNextBtn.addEventListener('click', () => moveToMatch(currentMatchIndex + 1));
  
  // 도감 버튼 이벤트 리스너 일괄 등록
  dexButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const dexType = btn.dataset.dexType;
      const file = btn.dataset.file;
      const isNational = btn.dataset.isNational === 'true';
      loadPokemonData(file, btn, isNational, dexType);
    });
  });
  
  // 저장된 도감 상태 불러오기 (기본값: national)
  const savedDex = localStorage.getItem('selectedDex') || 'national';
  
  // 저장된 도감 타입에 해당하는 버튼 찾기
  let targetBtn = document.querySelector(`.dex-btn[data-dex-type="${savedDex}"]`);
  
  // 만약 저장된 도감 버튼을 찾지 못하면 기본값(전국도감)으로 설정
  if (!targetBtn) {
    targetBtn = document.getElementById('btn-national-dex');
  }
  
  // 해당 버튼의 정보를 이용하여 데이터 로드
  if (targetBtn) {
    const dexType = targetBtn.dataset.dexType;
    const file = targetBtn.dataset.file;
    const isNational = targetBtn.dataset.isNational === 'true';
    loadPokemonData(file, targetBtn, isNational, dexType);
  }
}

initialize();