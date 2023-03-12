import gsap from 'gsap';
import ScrollTrigger from './ScrollTrigger.js';
import '../effects/titleAnimation.js';
const sectionRef = document.querySelector('[data-section-format-offline]');
const selector = gsap.utils.selector(sectionRef);
const titleTl = gsap.timeline({
  scrollTrigger: {
    trigger: sectionRef,
    start: 'top center',
  },
});

titleTl.titleAnim(selector('[data-title]')[0]);

// HORIZONTAL SCROLL
{
  const elRef = selector('[data-horizontal]')[0];
  const cardsRef = elRef.querySelectorAll('[data-card]');

  const getScrollLength = () => {
    const computedStyle = getComputedStyle(elRef);
    const elementWidth =
      elRef.clientWidth -
      (parseFloat(computedStyle.paddingLeft) +
        parseFloat(computedStyle.paddingRight));
    const cardsNumber = cardsRef.length;
    return (elementWidth / cardsNumber) * (cardsNumber - 1);
  };

  window.addEventListener('DOMContentLoaded', () => {
    const tween = gsap.to(elRef, {
      x: () => -getScrollLength(),
      scrollTrigger: {
        trigger: elRef,
        start: 'center center',
        end: () => '+=' + getScrollLength(),
        pin: true,
        scrub: 0.1,
      },
      ease: 'none',
      invalidateOnRefresh: true,
    });
    cardsRef.forEach(cardRef => {
      gsap.to(cardRef, {
        scrollTrigger: {
          trigger: cardRef,
          start: '10% center',
          end: '90% center',
          horizontal: true,
          containerAnimation: tween,
          toggleClass: 'format-offline-card--active',
          //   markers: true,
        },
      });
    });
  });
}
