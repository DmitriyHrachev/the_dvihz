import gsap from 'gsap';
import ScrollTrigger from './ScrollTrigger.js';

const sectionRef = document.querySelector('[data-section-feedbacks]');
const cardRefs = sectionRef.querySelectorAll('[data-card]');
const namesRefs = sectionRef.querySelectorAll('[data-name]');

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: sectionRef,
    start: 'top center',
  },
});
tl.to(cardRefs, {
  scale: 1,
  opacity: 1,
  startAt: {
    scale: 0.6,
    opacity: 0.6,
  },
  immediateRender: true,
  stagger: {
    each: 0.25,
    start: 'random',
  },
}).to(namesRefs, {
  opacity: 1,
  yPercent: 0,
  startAt: {
    opacity: 0,
    yPercent: 100,
  },
  immediateRender: true,
  stagger: {
    each: 0.25,
    start: 'random',
  },
});
