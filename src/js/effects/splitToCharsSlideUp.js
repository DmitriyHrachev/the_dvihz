import gsap from 'gsap';
import SplitText from 'Plugins/gsap/SplitText.js';

gsap.registerPlugin(SplitText);

gsap.registerEffect({
  name: 'splitToCharsSlideUp',
  plugins: 'SplitText',
  defaults: { stagger: 0.1 },
  extendTimeline: true,
  effect(el, vars) {
    const splitEl = new SplitText(el, { type: 'chars' });
    const tl = gsap.timeline();
    tl.set(el, { overflow: 'hidden' }).fromTo(
      splitEl.chars,
      { yPercent: 100 },
      { yPercent: 0, stagger: vars.stagger }
    );
    return tl;
  },
});
