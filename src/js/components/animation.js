gsap.registerPlugin(ScrollTrigger)
let tl = gsap.timeline()

tl.from('.hero__title', {
  y: 100,
  opacity: 0,
  scale: 0.5,
  duration: 1
}).from('.hero__social', {
  opacity: 0,
  scale: 0.3,
  duration: 1
}, 1.4).from('.header__btn', {
  y: 30,
  opacity: 0,
  duration: 1
}, 1).from('.scroll-btn', {
  y: 30,
  opacity: 0,
  duration: 1
}, 1.2)

gsap.from('.about__title', {
  scrollTrigger: '.about__title',
  y: 70,
  opacity: 0,
  duration: 1
})
gsap.from('.about__content .about__descr', {
  scrollTrigger: '.about__descr',
  y: 70,
  opacity: 0,
  stagger: 0.20,
  duration: 1,
}, 2)
gsap.from('.about__btn', {
  scrollTrigger: '.about__btn',
  y: 30,
  opacity: 0,
  duration: 1
})
gsap.from('.about__svg', {
  scrollTrigger: '.about__svg',
  x: 50,
  opacity: 0,
  duration: 1
})
gsap.from('.about__img', {
  scrollTrigger: '.about__img',
  scale: 0.3,
  opacity: 0,
  duration: 1
})
gsap.from('.about__svg2', {
  scrollTrigger: '.about__svg2',
  scale: 0,
  opacity: 0,
  duration: 1,
  stagger: 0.40,
})
gsap.from('.about__min-title', {
  scrollTrigger: '.about__min-title',
  y: 30,
  opacity: 0,
  duration: 1.5,
  stagger: 0.40,
})
gsap.from('.about__min-descr', {
  scrollTrigger: '.about__min-descr',
  y: 30,
  opacity: 0,
  duration: 1.5,
  stagger: 0.40,
})
gsap.from('.about__item span', {
  scrollTrigger: '.about__item',
  y: 30,
  opacity: 0,
  duration: 1.5,
})
gsap.from('.contact__title', {
  scrollTrigger: '.contact__title',
  y: 50,
  opacity: 0,
  stagger: 0.30,
})
gsap.from('.contact__img', {
  scrollTrigger: '.contact__img',
  scale: 0,
  opacity: 0,
  stagger: 0.30,
})
gsap.from('.contact__title-h3', {
  scrollTrigger: '.contact__title-h3',
  y: 50,
  opacity: 0,
  stagger: 0.30,
})
gsap.from('.contact__address', {
  scrollTrigger: '.contact__address',
  y: 50,
  opacity: 0,
  stagger: 0.30,
})
gsap.from('.contact__descr', {
  scrollTrigger: '.contact__descr',
  y: 50,
  opacity: 0,
})
