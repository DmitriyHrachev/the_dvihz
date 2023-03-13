import gsap from 'gsap';
import '../effects/titleAnimation.js';

const sectionRef = document.querySelector('[data-section-promo]');
const selector = selector => sectionRef.querySelector(selector);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: sectionRef,
    start: 'top center',
  },
});

// TITLE ANIMATION

tl.titleAnim(selector('[data-title]'), { split: false })
  .to(selector('[data-btn]'), {
    opacity: 1,
    scale: 1,
    startAt: {
      opacity: 0.6,
      scale: 0.6,
    },
    immediateRender: true,
  })
  .to(selector('[data-text]'), {
    y: 0,
    opacity: 1,
    startAt: { y: 10, opacity: 0 },
    immediateRender: true,
  });
