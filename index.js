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
const sidebarNav = document.getElementById('sidebar-nav');
let dexButtons = []; // 동적으로 생성된 후 업데이트될 변수

// 사이드바 관련 요소
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebar-overlay');
const openBtn = document.getElementById('open-sidebar');
const closeBtn = document.getElementById('close-sidebar');

// 검색 내비게이션 요소
const searchNavControls = document.getElementById('search-nav-controls');
const searchCounter = document.getElementById('search-counter');
const searchPrevBtn = document.getElementById('search-prev-btn');
const searchNextBtn = document.getElementById('search-next-btn');

// 스크롤 버튼 요소
const btnGoToTop = document.getElementById('btn-goto-top');
const btnGoToBottom = document.getElementById('btn-goto-bottom');


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
 * 검색 모드에 따라 하단 네비게이션 컨트롤의 가시성을 업데이트합니다.
 * '이름' 검색 모드에서만 노출됩니다.
 */
function updateSearchNavVisibility() {
  const searchColumn = searchOptionSelect.value;
  if (searchColumn === 'name') {
    searchNavControls.classList.remove('hidden');
  } else {
    searchNavControls.classList.add('hidden');
  }
}

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

  // 기본 폼 데이터 저장 (리셋용)
  card.dataset.baseName = pokemon.name;
  card.dataset.baseTypes = JSON.stringify(pokemon.types);
  card.dataset.baseImage = pokemon.image;
  if (pokemon.forms) {
    card.dataset.forms = JSON.stringify(pokemon.forms);
  }

  // HTML 컨텐츠 생성
  const typesHtml = createTypeBadgesHtml(pokemon.types);
  const weaknessesHtml = createTypeBadgesHtml(pokemon.weaknesses || []);
  const evolutionColorClass = evolutionCategoryColors[pokemon.evolution.category] || 'text-gray-500';
  const wikiUrl = `https://pokemon.fandom.com/ko/wiki/${pokemon.name}_(포켓몬)`;

  // 도감 번호 표시 로직
  const listNumHtml = isNationalDex ? '' : `<span class="pokemon-list-num text-gray-500 mr-1">No.${index + 1}</span>`;

  // 폼 버튼/드롭다운 HTML 생성
  let formsHtml = '';
  if (pokemon.forms && pokemon.forms.length > 0) {
    formsHtml = `
      <div class="mt-3 px-2 w-full max-w-[150px]">
        <select class="form-select w-full p-1.5 text-xs border border-gray-200 rounded-md bg-white text-gray-700 outline-none focus:ring-1 focus:ring-indigo-500 transition-all font-medium" 
          onchange="handleFormChange(${pokemon.id}, this)">
          <option value="reset">기본 폼 (Default)</option>
          ${pokemon.forms.map((form, i) => `
            <option value="${i}">${form.name.replace(pokemon.name, '').trim() || form.name}</option>
          `).join('')}
        </select>
      </div>`;
  }

  card.id = `card-${pokemon.id}`;
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
    <div class="pokemon-img-container p-4 pt-8 bg-gray-50 flex flex-col items-center justify-center transition-colors duration-300">
      <img id="img-${pokemon.id}" src="${pokemon.image}" alt="${pokemon.name}" class="w-24 h-24 pokemon-image transition-transform duration-300" loading="lazy">
      <a href="${wikiUrl}" target="_blank" rel="noopener noreferrer" class="group inline-flex items-center mt-2">
        <h3 id="name-${pokemon.id}" class="text-lg font-bold text-gray-800 group-hover:underline text-center break-keep">${pokemon.name}</h3>
        <i data-lucide="external-link" class="h-4 w-4 ml-1 text-gray-400 group-hover:text-blue-500 flex-shrink-0"></i>
      </a>
      ${formsHtml}
    </div>
    <div class="p-4 space-y-3">
      <div id="types-${pokemon.id}">
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

// 전역 함수로 등록 (HTML onclick에서 접근 가능하도록)
window.switchForm = function (id, formIndex) {
  const card = document.getElementById(`card-${id}`);
  if (!card || !card.dataset.forms) return;

  const forms = JSON.parse(card.dataset.forms);
  const targetForm = forms[formIndex];
  if (!targetForm) return;

  // 이미지 업데이트
  const img = document.getElementById(`img-${id}`);
  img.src = targetForm.image;
  // 애니메이션 효과
  img.classList.remove('scale-100');
  img.classList.add('scale-90', 'opacity-80');
  setTimeout(() => {
    img.classList.remove('scale-90', 'opacity-80');
    img.classList.add('scale-100');
  }, 150);

  // 이름 업데이트
  const nameEl = document.getElementById(`name-${id}`);
  nameEl.textContent = targetForm.name;

  // 타입 업데이트
  const typesDiv = document.querySelector(`#types-${id} div`);
  typesDiv.innerHTML = createTypeBadgesHtml(targetForm.types);

  // UI 업데이트 (버튼 또는 드롭다운)
  updateFormUI(card, formIndex + 1); // 0은 기본 폼 버튼(인덱스상 첫번째)
};

window.resetForm = function (id) {
  const card = document.getElementById(`card-${id}`);
  if (!card) return;

  const baseName = card.dataset.baseName;
  const baseImage = card.dataset.baseImage;
  const baseTypes = JSON.parse(card.dataset.baseTypes);

  // 이미지 업데이트
  const img = document.getElementById(`img-${id}`);
  img.src = baseImage;

  // 이름 업데이트
  const nameEl = document.getElementById(`name-${id}`);
  nameEl.textContent = baseName;

  // 타입 업데이트
  const typesDiv = document.querySelector(`#types-${id} div`);
  typesDiv.innerHTML = createTypeBadgesHtml(baseTypes);

  // UI 업데이트 (버튼 또는 드롭다운)
  updateFormUI(card, 0);
};

/**
 * 드롭다운(Select) 변경 시 호출되는 핸들러
 */
window.handleFormChange = function (id, selectEl) {
  const value = selectEl.value;
  if (value === 'reset') {
    resetForm(id);
  } else {
    switchForm(id, parseInt(value));
  }
};

/**
 * 폼 선택 UI(버튼 또는 드롭다운)의 상태를 업데이트합니다.
 */
function updateFormUI(card, activeIndex) {
  // 1. 버튼 방식 업데이트
  const buttons = card.querySelectorAll('.form-btn');
  if (buttons.length > 0) {
    buttons.forEach((btn, index) => {
      if (index === activeIndex) {
        btn.classList.remove('bg-gray-200', 'text-gray-700');
        btn.classList.add('bg-indigo-600', 'text-white');
      } else {
        btn.classList.add('bg-gray-200', 'text-gray-700');
        btn.classList.remove('bg-indigo-600', 'text-white');
      }
    });
  }

  // 2. 드롭다운 방식 업데이트
  const select = card.querySelector('.form-select');
  if (select) {
    select.value = activeIndex === 0 ? 'reset' : (activeIndex - 1).toString();
  }
}

// --- 이벤트 핸들러 및 주요 기능 ---

/**
 * 사이드바의 열림/닫힘 상태를 제어합니다.
 * @param {boolean} isOpen - 사이드바를 열지 여부
 */
function toggleSidebar(isOpen) {
  if (isOpen) {
    // 사이드바를 화면에 표시
    sidebar.classList.remove('-translate-x-full');
    // 오버레이 활성화
    overlay.classList.add('overlay-active');
  } else {
    // 사이드바를 화면 밖으로 이동
    sidebar.classList.add('-translate-x-full');
    // 오버레이 비활성화
    overlay.classList.remove('overlay-active');
  }
}

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

  // 아이콘 렌더링 (동적으로 변경된 요소가 있을 경우 대비)
  lucide.createIcons();
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

    // 매칭된 결과가 있으면 첫 번째 결과로 이동
    if (matchedCards.length > 0) {
      moveToMatch(0);
    } else {
      // 결과가 없으면 카운터 초기화
      searchCounter.textContent = '0/0';
    }
    updateSearchNavVisibility();
    return;
  }

  // 2. 그 외 검색(도감번호, 타입 등): 필터링 방식
  updateSearchNavVisibility();
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
  // 루사이드 아이콘 렌더링
  lucide.createIcons();
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
      btn.classList.remove('bg-indigo-100', 'text-indigo-600', 'dex-btn-active');
    });
    // 현재 선택된 버튼에만 활성 스타일 추가
    if (activeButton) {
      activeButton.classList.add('dex-btn-active');
    }

  } catch (error) {
    console.error('데이터를 불러오는 데 실패했습니다:', error);
    gridContainer.innerHTML = `<p class="col-span-full text-center text-red-500">${dataUrl} 파일을 불러오는 중 오류가 발생했습니다. 파일이 존재하는지 확인해주세요.</p>`;
  } finally {
    // 데이터 로드 및 렌더링 후 스크롤 버튼 상태를 다시 확인합니다.
    handleScrollButtons();
  }
}

/**
 * 스크롤 위치에 따라 TOP/BOTTOM 버튼의 표시 여부를 제어합니다.
 */
function handleScrollButtons() {
  const scrollY = window.scrollY;
  const pageHeight = document.documentElement.scrollHeight;
  const viewportHeight = window.innerHeight;

  // 스크롤이 조금이라도 내려가면 TOP 버튼 표시
  if (scrollY > 200) {
    btnGoToTop.classList.add('show');
  } else {
    btnGoToTop.classList.remove('show');
  }

  // 페이지 끝에서 조금 위에 도달하면 BOTTOM 버튼 숨김
  if (scrollY + viewportHeight > pageHeight - 200) {
    btnGoToBottom.classList.remove('show');
  } else {
    btnGoToBottom.classList.add('show');
  }
}


/**
 * 사이드바 메뉴를 동적으로 생성합니다.
 */
async function createSidebarMenu() {
  try {
    const response = await fetch('지역도감_시트정보.json');
    const regionalData = await response.json();

    // 1. 전국 도감 항상 최상단에 추가
    const nationalDexHtml = `
      <button class="dex-btn w-full flex items-center space-x-4 p-3 text-gray-500 hover:bg-gray-50 hover:text-indigo-600 rounded-xl transition-all text-left" 
        data-dex-type="national" data-file="pokemon.json" data-is-national="true">
        <i data-lucide="globe" class="w-5 h-5"></i>
        <span class="font-medium">전국 도감</span>
      </button>
    `;
    sidebarNav.innerHTML = nationalDexHtml;

    // 2. 게임별 그룹화
    const groups = {};
    regionalData.forEach(item => {
      if (!groups[item.game]) {
        groups[item.game] = [];
      }
      groups[item.game].push(item);
    });

    // 3. 그룹별 HTML 생성
    Object.keys(groups).forEach((game, index) => {
      const gId = `group-${index}`;
      const items = groups[game];

      const groupHtml = `
        <div class="sidebar-group pt-2">
          <button class="sidebar-category-header text-gray-500" onclick="toggleCategory('${gId}')">
            <div class="flex items-center space-x-3">
               <i data-lucide="package" class="w-4 h-4"></i>
               <span class="text-sm">${game}</span>
            </div>
            <i id="arrow-${gId}" data-lucide="chevron-down" class="category-arrow w-4 h-4"></i>
          </button>
          <div id="${gId}" class="sidebar-submenu">
            ${items.map(item => `
              <div class="flex items-center group/item pr-2">
                <button class="dex-btn flex-grow flex items-center space-x-3 p-2 text-gray-500 hover:bg-gray-50 hover:text-indigo-600 rounded-lg transition-all text-left" 
                  data-dex-type="${item.key}" data-file="pokemon-${item.key.replace(/:/g, '-')}.json" data-is-national="false">
                  <div class="w-1.5 h-1.5 rounded-full bg-gray-300 ml-1"></div>
                  <span class="text-sm font-medium">${item.name}</span>
                </button>
                ${item.map_url ? `
                  <a href="${item.map_url}" target="_blank" rel="noopener noreferrer" 
                    class="p-1.5 text-gray-400 hover:text-indigo-500 hover:bg-indigo-50 rounded-md transition-colors" 
                    onclick="event.stopPropagation();" title="지도 보기">
                    <i data-lucide="map" class="w-4 h-4"></i>
                  </a>
                ` : ''}
              </div>
            `).join('')}
          </div>
        </div>
      `;
      sidebarNav.insertAdjacentHTML('beforeend', groupHtml);
    });

    // 4. 이벤트 바인딩 및 초기 상태 설정
    refreshDexButtons();
    lucide.createIcons();

    // 현재 선택된 도감이 속한 그룹 열기
    const savedDex = localStorage.getItem('selectedDex') || 'national';
    const activeBtn = Array.from(dexButtons).find(btn => btn.dataset.dexType === savedDex);
    if (activeBtn) {
      const submenu = activeBtn.closest('.sidebar-submenu');
      if (submenu) {
        toggleCategory(submenu.id, true);
      }
      activeBtn.click();
    } else {
      // 기본은 전국 도감
      const nationalBtn = sidebarNav.querySelector('[data-dex-type="national"]');
      if (nationalBtn) nationalBtn.click();
    }

  } catch (error) {
    console.error('사이드바 데이터를 불러오는 데 실패했습니다:', error);
  }
}

/**
 * 동적으로 생성된 도감 버튼들을 다시 찾아 이벤트를 연결합니다.
 */
function refreshDexButtons() {
  dexButtons = sidebarNav.querySelectorAll('.dex-btn');
  dexButtons.forEach(btn => {
    // 기존 리스너가 중복되지 않도록 클론 후 교체하거나, 아예 새로 등록 (우리는 새로 그림)
    btn.addEventListener('click', () => {
      const dexType = btn.dataset.dexType;
      const file = btn.dataset.file;
      const isNational = btn.dataset.isNational === 'true';
      loadPokemonData(file, btn, isNational, dexType);

      // 모바일 등에서 클릭 시 사이드바 닫기 (선택 사항)
      // toggleSidebar(false); 
    });
  });
}

/**
 * 카테고리 접기/펴기를 토글합니다.
 * @param {string} id - 서브메뉴 ID
 * @param {boolean} forceOpen - 강제로 열지 여부
 */
window.toggleCategory = function (id, forceOpen = false) {
  const submenu = document.getElementById(id);
  const arrow = document.getElementById(`arrow-${id}`);
  if (!submenu || !arrow) return;

  const isOpen = submenu.classList.contains('active');

  if (forceOpen || !isOpen) {
    submenu.classList.add('active');
    arrow.classList.add('rotated');
  } else {
    submenu.classList.remove('active');
    arrow.classList.remove('rotated');
  }
};

// --- 애플리케이션 초기화 ---
async function initialize() {
  // 초기 UI 상태 설정
  updateToggleBtnUI();
  updateSearchNavVisibility();

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

  // 스크롤 버튼 이벤트
  btnGoToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  btnGoToBottom.addEventListener('click', () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }));
  window.addEventListener('scroll', handleScrollButtons);

  // 사이드바 이벤트 리스너 연결
  openBtn.addEventListener('click', () => toggleSidebar(true));
  closeBtn.addEventListener('click', () => toggleSidebar(false));
  overlay.addEventListener('click', () => toggleSidebar(false));

  // 사이드바 메뉴 동적 생성 및 데이터 로드 시작
  await createSidebarMenu();

  // 초기 스크롤 버튼 상태 설정
  handleScrollButtons();
}

initialize();