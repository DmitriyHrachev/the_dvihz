import gsap from 'gsap';

const programButton = document.querySelector('.program__button');
const programList = document.querySelector('.program__list');

programButton.addEventListener('click', function () {
  this.classList.toggle('active');
  const textContainer = this.querySelector('span');

  if (this.classList.contains('active')) {
    textContainer.innerHTML = 'Cховати';
    programList.classList.add('active');
  } else {
    textContainer.innerHTML = 'Уся программа';
    programList.classList.remove('active');
  }
});
