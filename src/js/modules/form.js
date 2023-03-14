import gsap from 'gsap';
import ScrollTrigger from './ScrollTrigger.js';

import '../effects/titleAnimation.js';

gsap.registerPlugin(ScrollTrigger);
const sectionRef = document.querySelector('[data-section-form]');
const selector = gsap.utils.selector(sectionRef);

// ANIMATION
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: sectionRef,
    start: 'top center',
  },
});
tl.titleAnim(selector('[data-title]'));
