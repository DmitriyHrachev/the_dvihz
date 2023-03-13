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
    // markers: true,
  },
});
const titleRef = sectionRef.querySelector('[data-title]');
titleTl.titleAnim(titleRef, { split: false });

// Replace text
{
  const elRef = sectionRef.querySelector('[data-replace-text]');
  const textBefore = elRef.textContent;
  const textAfter = elRef.getAttribute('data-replace-text');
  elRef.innerHTML = `<span class="replace-text__before">${textBefore}</span><span class="replace-text__after">${textAfter}</span>`;

  const beforeRef = elRef.querySelector('.replace-text__before');
  const afterRef = elRef.querySelector('.replace-text__after');

  titleTl.to([beforeRef, afterRef], {
    delay: 0.25,
    stagger: 0.25,
    yPercent: -100,
  });
}
const textRef = selector('[data-text]');
const tlText = gsap.timeline({
  scrollTrigger: {
    trigger: textRef,
    start: 'top bottom',
    end: 'center center',
    scrub: 5,
  },
});
tlText.charsOpacity(textRef);
