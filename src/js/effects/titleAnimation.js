import gsap from 'gsap';
import SplitText from 'Plugins/gsap/SplitText';
gsap.config({
  force3D: true,
});
gsap.registerEffect({
  name: 'titleAnim',
  effect: (target, config) => {
    const targetSplit = new SplitText(target, {
      type: 'lines, words',
      wordsClass: 'word',
      linesClass: 'title-anim__line',
    });

    return gsap.to(targetSplit.words, {
      yPercent: 0,
      startAt: { yPercent: 100 },
      immediateRender: true,
      stagger: config.stagger,
    });
  },

  defaults: { stagger: 0.25 }, //defaults get applied to any "config" object passed to the effect
  extendTimeline: true, //now you can call the effect directly on any GSAP timeline to have the result immediately inserted in the position you define (default is sequenced at the end)
});
