import gsap from 'gsap';
import ScrollTrigger from 'Plugins/gsap/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({
  toggleActions: 'play none none reverse',
});
export default ScrollTrigger;
