import { obtenerPeliculasSeriesDeLS } from "../commons/utilities.js";

import { cargarPeliculasDestacadas } from "./destacarCarousel.js";
import { cargarSlider } from "./slidePeliculasSeries.js";

cargarPeliculasDestacadas();

cargarSlider();

document.addEventListener("DOMContentLoaded", () => {
  const botonesPlay = document.querySelectorAll(".btn-play");

  botonesPlay.forEach((boton, index) => {
    boton.addEventListener("click", (event) => {
      event.preventDefault();

      const peliculas = obtenerPeliculasSeriesDeLS();
      const pelicula = peliculas[index];

      localStorage.setItem("peliculaSeleccionada", JSON.stringify(pelicula));

      window.location.href = "./pages/detallePeliculas.html";
    });
  });
});
