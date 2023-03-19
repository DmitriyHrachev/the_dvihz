import gsap from 'gsap';
import ScrollTrigger from './modules/ScrollTrigger.js';
import { Fancybox } from '@fancyapps/ui/src/Fancybox/Fancybox.js';
import lottie from 'lottie-web';

window.history.scrollRestoration = 'manual';
ScrollTrigger.clearScrollMemory('manual');

const vh = window.innerHeight * 0.01;
const vw = window.innerWidth * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
document.documentElement.style.setProperty('--vw', `${vw}px`);

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
