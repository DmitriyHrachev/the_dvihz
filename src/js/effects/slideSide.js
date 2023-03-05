import gsap from 'gsap';
gsap.registerEffect({
  name: 'slideSide',
  defaults: { from: 'left', reverse: false },
  extendTimeline: true,
  effect(target, vars) {
    return gsap.to(target, {
      xPercent: 0,
      ease: 'elastic.inOut(1, 1)',
      duration: 1.5,
      opacity: 1,
      runBackwards: vars.reverse,
      startAt: {
        opacity: 0,
        xPercent: vars.from === 'left' ? -100 : 100,
      },
    });
  },
});
