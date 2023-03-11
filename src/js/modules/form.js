import axios from 'axios';
import gsap from 'gsap';
import ScrollTrigger from 'Plugins/gsap/ScrollTrigger';
import '../effects/titleAnimation.js';

gsap.registerPlugin(ScrollTrigger);
const sectionRef = document.querySelector('[data-section-form]');
const selector = gsap.utils.selector(sectionRef);

const formRef = selector('[data-form]')[0];
const sbmtBtn = selector('button')[0];

// Fort handler
formRef.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  toggleLoading();
  axios
    .post('http://php-learn/the_dvizh/form.php', formData)
    .then(() => console.log('Ok'))
    .catch(() => console.log('Something went wrong'))
    .finally(() => {
      toggleLoading();
    });
});
function toggleLoading() {
  formRef.classList.toggle('form--loading');
  sbmtBtn.disabled = !sbmtBtn.disabled;
}

// ANIMATION
const tl = gsap.timeline({
  scrollTrigger: {
    start: 'top center',
  },
});
tl.titleAnim(selector('[data-title]'));
