import './modules/form.js';
import lottie from 'lottie-web';

window.addEventListener('DOMContentLoaded', () => {
  lottie.loadAnimation({
    container: document.getElementById('lottie'), // the dom element that will contain the animation
    renderer: 'canvas',
    loop: true,
    autoplay: true,
    path: '../files/promo-animation.json', // the path to the animation json
  });
});
