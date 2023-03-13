import gsap from 'gsap';
import '../effects/titleAnimation.js';

const sectionRef = document.querySelector('[data-section-program]');

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: sectionRef,
    start: 'top center',
  },
});

// TITLE ANIMATION

const titleRef = sectionRef.querySelector('[data-title]');
tl.titleAnim(titleRef, { split: false });

const programButton = sectionRef.querySelector('.program__button');
const programList = sectionRef.querySelector('.program__list');

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
