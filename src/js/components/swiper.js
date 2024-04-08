const swiper = new Swiper(".hero__swiper", {
  speed: 1000,
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 5000,
  },
});

const swiper2 = new Swiper(".interiors__swaiper", {
  spaceBetween: 30,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    860: {
      slidesPerView: 2,
      centeredSlides: true,
    },

  },
});
