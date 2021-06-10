import Swiper from "swiper";
import SwiperCore, { Navigation } from "swiper/core";
import "swiper/swiper.min.css";

SwiperCore.use([Navigation]);

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-project-slider]").forEach((slider) => {
    // only init swiper if there's more than 1 slide
    if (slider.querySelectorAll(".swiper-slide").length > 1) {
      let swiper = new Swiper(slider as HTMLElement, {
        loop: true,
        speed: 1000,
        grabCursor: true,
        autoHeight: true,
        slidesPerView: 1,
        spaceBetween: 20,

        breakpoints: {
          640: {
            spaceBetween: 40,
          },
        },

        // Disable preloading of all images
        preloadImages: false,
        // Enable lazy loading
        lazy: {
          loadPrevNext: true,
          loadOnTransitionStart: true,
        },

        navigation: {
          prevEl: "[data-project-slider-prev]",
          nextEl: "[data-project-slider-next]",
        },

        on: {
          init: function () {
            slider.classList.add("swiper-initialized");
          },
        },
      });

      if (typeof swiper.navigation === "object") {
        [swiper.navigation.prevEl, swiper.navigation.nextEl]
          .filter((v) => v)
          .forEach((el) => {
            el.addEventListener("click", (e) => {
              (e.currentTarget as HTMLElement).blur();
            });
          });
      }
    }
  });
});
