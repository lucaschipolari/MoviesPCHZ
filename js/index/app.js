import { cargarPeliculasDestacadas } from "./destacarCarousel.js";

cargarPeliculasDestacadas()

new Swiper(".card-content", {
    loop: true,
    spaceBetween: 15,
    grabCursor: true,
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamiBullets: true,
    },
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints: {
      600: {
        slidesPerView: 3,
      },
      968: {
        slidesPerView: 4,
      },
    },
  });
  