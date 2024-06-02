import { cargarPaginaDetalles } from "../detallePelicula/detallePelicula.js";
import { cargarPeliculasDestacadas } from "./destacarCarousel.js";
import { cargarSlider } from "./slidePeliculasSeries.js";

cargarPeliculasDestacadas();

cargarSlider();

const $botonesPlay = document.querySelectorAll(".btn-play");

$botonesPlay.forEach((boton, index) => {
    boton.addEventListener("click", event => {
        event.preventDefault();
        cargarPaginaDetalles(index);
        window.location.href = "detallePeliculas.html"
    })
    
});