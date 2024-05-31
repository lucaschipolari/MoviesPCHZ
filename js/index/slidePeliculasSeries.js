import { obtenerPeliculasSeriesDeLS } from "../commons/utilities.js";

export const cargarSlider = () => {
  const peliculasSeries = obtenerPeliculasSeriesDeLS();
  const $swiperWrapper = document.getElementById("wrapper-cards");
  $swiperWrapper.innerHTML = "";

  peliculasSeries.forEach((peliculaSerie) => {
    if(peliculaSerie.estaPublicada === "Si"){
      const $slideCards = document.createElement("div")
      $slideCards.classList.add("swiper-slide")

      const $card = document.createElement("div")
      $card.classList.add("card")

      const $imgCard = document.createElement("img")
      $imgCard.src = peliculaSerie.image;
      $imgCard.alt = peliculaSerie.title;

      const $overlayCard = document.createElement("div")
      $overlayCard.classList.add("overlay-card")

      const $text = document.createElement("div")
      $text.classList.add("text")

      const $title = document.createElement("h5")
      $title.textContent = peliculaSerie.title

      const $description = document.createElement("p")
      $description.textContent = peliculaSerie.description;

      $text.appendChild($title)
      $text.appendChild($description)
      $overlayCard.appendChild($text)
      $card.appendChild($imgCard)
      $card.appendChild($overlayCard)
      $slideCards.appendChild($card)
      $swiperWrapper.appendChild($slideCards)

    }
  });
};

new Swiper(".swiper-cards", {
  // Optional parameters
  slidesPerView: "auto",
  spaceBetween: 15,

  direction: "horizontal",
  loop: true,
  autoplay: false,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
