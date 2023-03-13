import gsap from 'gsap';
import '../effects/titleAnimation.js';

const sectionRef = document.querySelector('[data-section-people]');

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: sectionRef,
    start: 'top center',
  },
});

// TITLE ANIMATION

const titleRef = sectionRef.querySelector('[data-title]');

tl.titleAnim(titleRef);
