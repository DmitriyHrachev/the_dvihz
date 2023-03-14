import gsap from 'gsap';
import ScrollTrigger from './ScrollTrigger.js';
import '../effects/titleAnimation.js';
const mm = gsap.matchMedia();
const sectionRef = document.querySelector('[data-section-connect]');

// TITLE ANIM
{
  const titleRef = sectionRef.querySelector('[data-title]');
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef,
      start: 'top center',
    },
  });
  tl.titleAnim(titleRef);
}
// TITLE PIN
mm.add('(min-width: 1024px)', () => {
  const containerToPin = sectionRef.querySelector('[data-pin]');
  const endTrigger = sectionRef.querySelector('[data-pin-endtrigger]');

  const trigger = ScrollTrigger.create({
    trigger: containerToPin,
    endTrigger,
    start: 'center center',
    end: () => `bottom-=${containerToPin.clientHeight / 2} center`,
    pin: true,
    pinSpacing: false,
    refreshPriority: 1,

    // markers: true,
  });

  return () => trigger.kill();
});
