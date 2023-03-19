import gsap from 'gsap';
import ScrollTrigger from './modules/ScrollTrigger.js';
import { Fancybox } from '@fancyapps/ui/src/Fancybox/Fancybox.js';
import lottie from 'lottie-web';

window.history.scrollRestoration = 'manual';
ScrollTrigger.clearScrollMemory('manual');

let vh = window.innerHeight * 0.01;
let vw = window.innerWidth * 0.01;
function setVPSize() {
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  document.documentElement.style.setProperty('--vw', `${vw}px`);
}
function relDiff(a, b) {
  return 100 * Math.abs((a - b) / ((a + b) / 2));
}
setVPSize();
window.addEventListener('resize', () => {
  const BREAKPOINT = 25,
    newVH = window.innerHeight * 0.01,
    newVW = window.innerWidth * 0.01,
    differenceVH = (newVH, vh),
    differenceVW = (newVW, vw);

  if (differenceVH > BREAKPOINT || differenceVW > BREAKPOINT) {
    setVPSize();
    ScrollTrigger.refresh();
  }
});
import './modules/header.js';
import './modules/promo.js';
import './modules/video.js';
import './modules/people.js';
import './modules/inside.js';
import './modules/dont.js';
import './modules/connect.js';
import './modules/quality.js';
import './modules/stats.js';
import './modules/feedbacks.js';
import './modules/offline.js';
import './modules/form.js';
import './modules/format.js';
import './modules/program.js';
import './modules/buy-custom.js';

window.addEventListener('DOMContentLoaded', () => {
  lottie.loadAnimation({
    container: document.getElementById('lottie'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path:
      window.innerWidth < 1200
        ? '../files/promo-mob.json'
        : '../files/promo-desk.json',
  });
});
