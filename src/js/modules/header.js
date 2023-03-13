const openButton = document.querySelector('.header__menu-btn');
const closeButton = document.querySelector('.menu__close-button');
const menu = document.querySelector('.menu');

openButton.addEventListener('click', openMenu);

menu.addEventListener('click', e => {
  const el = e.target;
  if (el.hasAttribute('data-close-menu') || el.closest('[data-close-menu]'))
    closeMenu();
});

function closeMenu() {
  document.body.style.overflowY = 'auto';
  menu.classList.remove('active');
}
function openMenu() {
  menu.classList.add('active');
  document.body.style.overflowY = 'hidden';
}
