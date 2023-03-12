import gsap from 'gsap';
import ScrollTrigger from './ScrollTrigger.js';

//  ANIMATION
const sectionRef = document.querySelector('[data-section-buy-custom]');
const bgColor = '#fff';
const textColor = '#000';
const prevBg = '#000';
const prevTextColor = '#fff';
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

ScrollTrigger.create({
  trigger: sectionRef,
  start: 'top center',
  onEnter: () => setBgColor(),
  onLeaveBack: () => restoreBgColor(),
  //   onLeave: () => restoreBgColor(),
  markers: true,
});
