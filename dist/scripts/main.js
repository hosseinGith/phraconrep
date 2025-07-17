"use strict";
new Swiper(".firstSliderHomePage", {
  direction: "horizontal",
  loop: false,
  slidesPerView: 'auto',
  spaceBetween: 10,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
      width: null,
    },
    500: {
      slidesPerView: 'auto',
      spaceBetween: 10,
      width: null,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
