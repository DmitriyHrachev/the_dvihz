import '../effects/charsOpacity.js';
import gsap from 'gsap';
import ScrollTrigger from './ScrollTrigger.js';

const sectionRef = document.querySelector('[data-section-offline]');
const selector = gsap.utils.selector(sectionRef);
const titleTl = gsap.timeline({
  scrollTrigger: {
    trigger: sectionRef,
    start: 'top center',
  },
});
titleTl.titleAnim(selector('[data-title]'));
const textRef = selector('[data-text]');
const tlText = gsap.timeline({
  scrollTrigger: {
    trigger: textRef,
    start: 'top 60%',
    end: 'bottom 40%',
    scrub: 5,
  },
});
tlText.charsOpacity(textRef);
