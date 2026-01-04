const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebar-overlay');
const openBtn = document.getElementById('open-sidebar');
const closeBtn = document.getElementById('close-sidebar');

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

// 버튼 및 오버레이 클릭 이벤트에 사이드바 제어 함수 연결
openBtn.addEventListener('click', () => toggleSidebar(true));
closeBtn.addEventListener('click', () => toggleSidebar(false));
overlay.addEventListener('click', () => toggleSidebar(false));
