import { obtenerPeliculasSeriesDeLS } from "../commons/utilities.js";

export const cargarSlider = () => {
  const peliculasSeries = obtenerPeliculasSeriesDeLS();

  const moviesByCategory = peliculasSeries.reduce((acc, movie) => {
    if(!acc[movie.category]) {
      acc[movie.category] = []
    }
    acc[movie.category].push(movie)
    return acc
  }, {})

  const $swiperContainer = document.getElementById("slider-container");
  
  $swiperContainer.innerHTML = "";

  Object.entries(moviesByCategory).forEach(([category, peliculasSeries]) => {
    const $categoriaSlide = document.createElement("div")
    $categoriaSlide.classList.add("swiper-slide")

    const $categoriaNombre = document.createElement("h3")
    $categoriaNombre.classList.add("text-light", "mt-3", "text-center");
    $categoriaNombre.textContent = category;
    

    const $swiperCardsContainer = document.createElement("div"); 
    $swiperCardsContainer.classList.add("swiper", "swiper-cards", "mt-3");

    const $swiperWrapper = document.createElement("div"); 
    $swiperWrapper.classList.add("swiper-wrapper");

    peliculasSeries.forEach((peliculaSerie) => {
      if (peliculaSerie.estaPublicada === "Si") {
        const $slideItem = document.createElement("div");
        $slideItem.classList.add("swiper-slide");
  
        const $card = document.createElement("div");
        $card.classList.add("card");
  
        const $imgCard = document.createElement("img");
        $imgCard.src = peliculaSerie.image;
        $imgCard.alt = peliculaSerie.title;
  
        const $overlayCard = document.createElement("div");
        $overlayCard.classList.add("overlay-card", "card");
  
        const $text = document.createElement("div");
        $text.classList.add(
          "text",
          "card-body",
          "d-flex",
          "flex-column",
          "justify-content-between"
        );
  
        const $title = document.createElement("h5");
        $title.classList.add("card-title");
        $title.textContent = peliculaSerie.title;
  
        const $description = document.createElement("p");
        $description.classList.add("card-text", "mb-4", "flex-grow-1");
        $description.textContent = peliculaSerie.description;
  
        const $divBotonesCard = document.createElement("div");
        $divBotonesCard.classList.add("d-flex", "justify-content-start");
  
        const $btnReproducirCard = document.createElement("a");
        $btnReproducirCard.href = "#";
        $btnReproducirCard.classList.add(
          "text-decoration-none",
          "botones-card",
          "mx-1",
          "fs-5",
          "btn-play"
        );
      
          $btnReproducirCard.dataset.id = peliculaSerie.code;
      
  
        const $iconoReproducirCard = document.createElement("i");
        $iconoReproducirCard.classList.add("ri-play-large-line");
        $btnReproducirCard.appendChild($iconoReproducirCard);
  
        const $btnFavoritoCard = document.createElement("a");
        $btnFavoritoCard.href = "#";
        $btnFavoritoCard.classList.add(
          "text-decoration-none",
          "botones-card",
          "mx-1",
          "fs-5"
        );
        const $iconoFavoritoCard = document.createElement("i");
        $iconoFavoritoCard.classList.add("ri-bookmark-line");
        $btnFavoritoCard.appendChild($iconoFavoritoCard);
  
        const $btnDetallesCard = document.createElement("a");
        $btnDetallesCard.href = "#";
        $btnDetallesCard.classList.add(
          "text-decoration-none",
          "botones-card",
          "mx-1",
          "fs-5"
        );
        const $iconoDetallesCard = document.createElement("i");
        $iconoDetallesCard.classList.add("ri-add-line");
        $btnDetallesCard.appendChild($iconoDetallesCard);
  
        $divBotonesCard.appendChild($btnReproducirCard);
        $divBotonesCard.appendChild($btnFavoritoCard);
        $divBotonesCard.appendChild($btnDetallesCard);
  
        $text.appendChild($title);
        $text.appendChild($description);
        $text.appendChild($divBotonesCard);
  
        $overlayCard.appendChild($text);

        $card.appendChild($imgCard);
        $card.appendChild($overlayCard);

        $slideItem.appendChild($card);
        $swiperWrapper.appendChild($slideItem);
      }
      
    });
    const $buttonPrev = document.createElement("div");
    $buttonPrev.classList.add("swiper-button-prev");

    const $buttonNext = document.createElement("div");
    $buttonNext.classList.add("swiper-button-next");

    $swiperCardsContainer.appendChild($swiperWrapper);
    $categoriaSlide.appendChild($categoriaNombre);
    $categoriaSlide.appendChild($swiperCardsContainer);
    $categoriaSlide.appendChild($buttonPrev);
    $categoriaSlide.appendChild($buttonNext);
    $swiperContainer.appendChild($categoriaSlide);

    new Swiper($swiperCardsContainer, {
      spaceBetween: 15,
      direction: "horizontal",
      loop: false,
      autoplay: false,
      navigation: {
        nextEl: $buttonNext,
        prevEl: $buttonPrev,
      },
      breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
        1400: {
          slidesPerView: 6,
        },
      },
    });
    $buttonPrev.classList.add("swiper-button-prev-custom");
    $buttonNext.classList.add("swiper-button-next-custom");
  });

}
