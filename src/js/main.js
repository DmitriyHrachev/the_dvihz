import gsap from 'gsap';
import ScrollTrigger from './modules/ScrollTrigger.js';
import { Fancybox } from '@fancyapps/ui/src/Fancybox/Fancybox.js';

import lottie from 'lottie-web';

import './modules/dont.js';
import './modules/connect.js';
import './modules/stats.js';
import './modules/feedbacks.js';
import './modules/buy-custom.js';
import './modules/offline.js';
import './modules/form.js';
import './modules/format.js';
window.addEventListener('DOMContentLoaded', () => {
  lottie.loadAnimation({
    container: document.getElementById('lottie'), // the dom element that will contain the animation
    renderer: 'canvas',
    loop: true,
    autoplay: true,
    path: '../files/promo-animation.json', // the path to the animation json
  });
  ScrollTrigger.refresh();
});
