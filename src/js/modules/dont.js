import gsap from 'gsap';
import ScrollTrigger from './ScrollTrigger.js';
import SplitText from 'Plugins/gsap/SplitText.js';

gsap.registerPlugin(SplitText);

const sectionRef = document.querySelector('[data-section-dont]');
const titleRef = sectionRef.querySelectorAll('[data-title] .line');
gsap.to(titleRef, {
  yPercent: 0,
  startAt: { yPercent: 100 },
  stagger: 0.25,
  immediateRender: true,
  scrollTrigger: {
    trigger: sectionRef,
    start: 'top center',
  },
});
