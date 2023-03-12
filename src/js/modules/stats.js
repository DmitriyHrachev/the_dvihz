import { CountUp } from 'countup.js';
const sectionRef = document.querySelector('[data-section-stat]');

const countersRef = sectionRef.querySelectorAll('[data-counter]');
countersRef.forEach(
  ref =>
    new CountUp(ref, parseInt(ref.dataset.counter), {
      enableScrollSpy: true,
      duration: 3,
      scrollSpyOnce: true,
    })
);
