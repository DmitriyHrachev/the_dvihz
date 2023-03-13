import gsap from 'gsap';
import ScrollTrigger from './ScrollTrigger.js';

const sectionRef = document.querySelector('[data-section-video]');

const videoWrap = sectionRef.querySelector('[data-wrap]');
const videoInner = videoWrap.querySelector('[data-inner]');
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: videoWrap,
    start: 'top center',
    end: 'center center',
    scrub: 5,
  },
});
tl.to(videoInner, {
  rotateY: 0,
  rotateX: 0,
  rotateZ: 0,
  scale: 1,
  startAt: { scale: 0.3, rotateY: -45, rotateX: 45, rotateZ: 45 },
  immediateRender: true,
});
