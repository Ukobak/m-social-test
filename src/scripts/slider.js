import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiper = new Swiper(".swiper", {
  loop: true,

  modules: [Navigation, Pagination],

  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
    clickable: true,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1.5,
      spaceBetween: 30,
    },
    350: {
      slidesPerView: 2.2,
    },
    420: {
      slidesPerView: 2.5,
    },
    500: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    600: {
      slidesPerView: 3,
    },
    700: {
      slidesPerView: 3,
    },
    760: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 3,
    },
    900: {
      slidesPerView: 3,
    },
    980: {
      slidesPerView: 3.2,
    },
    1000: {
      slidesPerView: 4,
    },
    1100: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 4,
    },
    1350: {
      slidesPerView: 4,
    },
    1500: {
      slidesPerView: 4,
    },
    1650: {
      slidesPerView: 4,
    },
    1800: {
      slidesPerView: 4,
    },
  },
});
