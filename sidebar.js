const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebar-overlay');
const openBtn = document.getElementById('open-sidebar');
const closeBtn = document.getElementById('close-sidebar');

function toggleSidebar(isOpen) {
  if (isOpen) {
    sidebar.classList.remove('-translate-x-full');
    overlay.classList.add('overlay-active');
  } else {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.remove('overlay-active');
  }
}

openBtn.addEventListener('click', () => toggleSidebar(true));
closeBtn.addEventListener('click', () => toggleSidebar(false));
overlay.addEventListener('click', () => toggleSidebar(false));