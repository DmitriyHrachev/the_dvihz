import gsap from 'gsap';
import '../effects/titleAnimation.js';

const sectionRef = document.querySelector('[data-section-quality]');

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: sectionRef,
    start: 'top center',
  },
});

// TITLE ANIMATION

const titleRef = sectionRef.querySelector('[data-title]');
const nameRef = sectionRef.querySelector('[data-name]');
tl.titleAnim(titleRef, { split: false }).titleAnim(nameRef, { split: false });
