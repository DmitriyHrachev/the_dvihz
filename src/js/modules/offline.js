import gsap from 'gsap';
import ScrollTrigger from './ScrollTrigger.js';
import '../effects/charsOpacity.js';
import '../effects/titleAnimation.js';

const sectionRef = document.querySelector('[data-section-offline]');
const selector = gsap.utils.selector(sectionRef);

//  ANIMATION
const bgColor = '#b6ff7d';
const textColor = '#000';
const prevBg = '#fff';
const prevTextColor = '#000';
const setBgColor = () =>
  gsap.to(document.body, {
    backgroundColor: bgColor,
    color: textColor,
    '--backgroundColor': bgColor,
  });
const restoreBgColor = () =>
  gsap.to(document.body, {
    backgroundColor: prevBg,
    color: prevTextColor,
    '--backgroundColor': prevBg,
  });

const titleTl = gsap.timeline({
  scrollTrigger: {
    trigger: sectionRef,
    start: 'top center',
    end: 'bottom center',
    onEnter: () => setBgColor(),
    onLeaveBack: () => restoreBgColor(),
    onEnterBack: () => setBgColor(),
    onLeave: () =>
      gsap.to(document.body, {
        backgroundColor: '#000',
        color: '#fff',
        '--backgroundColor': '#000',
      }),
    markers: true,
  },
});
titleTl.titleAnim(selector('[data-title]'));
const textRef = selector('[data-text]');
const tlText = gsap.timeline({
  scrollTrigger: {
    trigger: textRef,
    start: 'top 60%',
    end: 'bottom 40%',
    scrub: 5,
  },
});
tlText.charsOpacity(textRef);
