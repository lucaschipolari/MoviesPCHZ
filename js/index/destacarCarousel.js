import { obtenerPeliculasSeriesDestacadasDeLS } from "../commons/utilities.js";

export const cargarPeliculasDestacadas = () => {
  const peliculasDestacadas = obtenerPeliculasSeriesDestacadasDeLS();
  const $swiperContainer = document.querySelector(".swiper-wrapper");
  $swiperContainer.innerHTML = "";

  if (peliculasDestacadas.length === 0) {
    const $swiperSlide = document.createElement("div");
    $swiperSlide.classList.add("swiper-slide");

    const $defaultBanner = document.createElement("img");
    $defaultBanner.classList.add("img-banner-crunchy");
    $defaultBanner.src = "./assets/BannerBienvenidos.jpg";
    $defaultBanner.alt = "Banner por defecto Crunchyroll";

    $swiperSlide.appendChild($defaultBanner);
    $swiperContainer.appendChild($swiperSlide);
  } else {
    peliculasDestacadas.forEach((pelicula) => {
      const $swiperSlide = document.createElement("div");
      $swiperSlide.classList.add("swiper-slide");

      const $imgSwiper = document.createElement("img");
      $imgSwiper.src = pelicula.banner;
      $imgSwiper.alt = pelicula.title;

      const $overlaySwiper = document.createElement("div");
      $overlaySwiper.classList.add("overlay");

      const $titleSwiper = document.createElement("h1");
      $titleSwiper.classList.add("title");
      $titleSwiper.textContent = pelicula.title;

      const $descriptionSwiper = document.createElement("p");
      $descriptionSwiper.classList.add("description");
      $descriptionSwiper.textContent = pelicula.description;

      const $highlightButtonSwiper = document.createElement("div");
      $highlightButtonSwiper.classList.add("buttons");

      const $btnReproducirSwiper = document.createElement("a");
      $btnReproducirSwiper.href = "#";
      $btnReproducirSwiper.classList.add(
        "btn",
        "btn-play",
        "btn-lg",
        "btn-orange",
        "btn-primary"
      );
      const $iconoReproducirSwiper = document.createElement("i");
      $iconoReproducirSwiper.classList.add(
        "fa-regular",
        "fa-circle-play",
        "me-1"
      );
      $btnReproducirSwiper.appendChild($iconoReproducirSwiper);
      $btnReproducirSwiper.appendChild(document.createTextNode("Reproducir"));

      const $btnInfoSwiper = document.createElement("a");
      $btnInfoSwiper.href = "#";
      $btnInfoSwiper.classList.add(
        "btn",
        "btn-outline-secondary",
        "btn-orange-outline",
        "btn-lg"
      );
      const $iconoInfoSwiper = document.createElement("i");
      $iconoInfoSwiper.classList.add("ri-error-warning-line", "me-1");
      $btnInfoSwiper.appendChild($iconoInfoSwiper);
      $btnInfoSwiper.appendChild(document.createTextNode("Ver más"));

      $highlightButtonSwiper.appendChild($btnReproducirSwiper);
      $highlightButtonSwiper.appendChild($btnInfoSwiper);

      $overlaySwiper.appendChild($titleSwiper);
      $overlaySwiper.appendChild($descriptionSwiper);
      $overlaySwiper.appendChild($highlightButtonSwiper);

      $swiperSlide.appendChild($imgSwiper);
      $swiperSlide.appendChild($overlaySwiper);

      $swiperContainer.appendChild($swiperSlide);
    });
  }
};

new Swiper(".swiper-hero", {
  direction: "horizontal",
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 10000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: "true",
    dynamicBullets: "true",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
