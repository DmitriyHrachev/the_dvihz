const openButton = document.querySelector('.header__menu-btn');
const closeButton = document.querySelector('.menu__close-button');
const menu = document.querySelector('.menu');

openButton.addEventListener('click', function () {
  menu.classList.add('active');
});

closeButton.addEventListener('click', function () {
  menu.classList.remove('active');
});
