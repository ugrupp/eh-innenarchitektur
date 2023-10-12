import Swiper, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/swiper.min.css";

document.addEventListener("DOMContentLoaded", () => {
  const containerSentinel: HTMLElement = document.querySelector(
    "[data-hero-container-sentinel]"
  )!;

  document.querySelectorAll("[data-hero-slider]").forEach((slider) => {
    // only init swiper if there's more than 1 slide
    if (slider.querySelectorAll(".swiper-slide").length > 1) {
      let swiper = new Swiper(slider as HTMLElement, {
        modules: [Autoplay, Navigation, Pagination],
        loop: true,
        speed: 1000,
        grabCursor: true,
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 20,

        breakpoints: {
          640: {
            spaceBetween: 40,
            centeredSlides: true,
          },
          1024: {
            spaceBetween: 48,
            centeredSlides: true,
          },
          1280: {
            spaceBetween: 56,
            centeredSlides: true,
          },
          1536: {
            centeredSlides: true,
            spaceBetween: 80,
          },
        },

        autoplay: {
          delay: 4000,
        },

        pagination: {
          el: "[data-hero-slider-pagination]",
          type: "bullets",
          clickable: true,
          bulletClass:
            "block w-2.5 lg:w-3 h-2.5 lg:h-3 border border-warmGray-600 rounded-full transition-colors cursor-pointer hover:bg-red-600 hover:border-red-600",
          bulletActiveClass: "bg-red-600 border-red-600",
        },

        // Disable preloading of all images
        preloadImages: false,
        // Enable lazy loading
        lazy: {
          loadPrevNext: true,
          loadOnTransitionStart: true,
        },

        navigation: {
          prevEl: "[data-hero-slider-prev]",
          nextEl: "[data-hero-slider-next]",
        },

        on: {
          init: function () {
            slider.classList.add("swiper-initialized");
          },
        },
      });

      const setSlideWidth = () => {
        if (containerSentinel) {
          swiper.slides.forEach((slide) => {
            slide.style.width = `${containerSentinel.offsetWidth}px`;
          });
          swiper.update();
        }
      };

      setSlideWidth();
      swiper.on("resize", setSlideWidth);
    }
  });
});
