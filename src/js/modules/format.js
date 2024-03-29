import gsap from 'gsap';
import ScrollTrigger from './ScrollTrigger.js';
import '../effects/titleAnimation.js';

const MM = gsap.matchMedia();
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
  const cardsRef = [...elRef.querySelectorAll('[data-card]')];

  const getScrollLength = () => {
    const computedStyle = getComputedStyle(elRef);
    const elementWidth =
      elRef.clientWidth -
      (parseFloat(computedStyle.paddingLeft) +
        parseFloat(computedStyle.paddingRight));
    const cardsNumber = cardsRef.length;
    return (elementWidth / cardsNumber) * (cardsNumber - 1);
  };

  MM.add('(max-width: 1199px)', () => {
    const cardAnimTweens = cardsRef.map(cardRef => {
      return gsap.to(cardRef, {
        scrollTrigger: {
          trigger: cardRef,
          start: '10% center',
          end: '90% center',
          toggleClass: 'format-offline-card--active',
          markers: true,
        },
      });
    });
    return () => {
      cardAnimTweens.forEach(tween => tween.revert());
    };
  });
  MM.add('(min-width: 1200px)', () => {
    const tween = gsap.to(elRef, {
      x: () => -getScrollLength(),
      scrollTrigger: {
        trigger: elRef,
        start: 'center center',
        end: () => '+=' + getScrollLength(),
        pin: true,
        // pinSpacer: true,
        refreshPriority: 2,
        scrub: 0.1,
      },
      ease: 'none',
    });
    const cardAnimTweens = cardsRef.map(cardRef => {
      return gsap.to(cardRef, {
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
    return () => {
      tween.revert();
      cardAnimTweens.forEach(tween => tween.revert());
    };
  });
}
