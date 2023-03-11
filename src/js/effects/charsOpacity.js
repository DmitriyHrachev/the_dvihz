import gsap from 'gsap';
import SplitText from 'Plugins/gsap/SplitText';
gsap.registerEffect({
  name: 'charsOpacity',
  effect: (target, config) => {
    const targetSplit = new SplitText(target, {
      type: 'words, chars',
    });

    return gsap.to(targetSplit.chars, {
      opacity: 1,
      startAt: { opacity: 0.2 },
      immediateRender: true,
      stagger: config.stagger,
    });
  },

  defaults: { stagger: 0.25 }, //defaults get applied to any "config" object passed to the effect
  extendTimeline: true, //now you can call the effect directly on any GSAP timeline to have the result immediately inserted in the position you define (default is sequenced at the end)
});
