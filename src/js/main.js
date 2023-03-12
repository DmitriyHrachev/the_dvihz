import gsap from 'gsap';
import ScrollTrigger from './modules/ScrollTrigger.js';

import lottie from 'lottie-web';

import './modules/connect.js';
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