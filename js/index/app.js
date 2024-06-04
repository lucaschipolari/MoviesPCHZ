import { obtenerPeliculasSeriesDeLS } from "../commons/utilities.js";
import { cargarPaginaDetalles } from "../detallePelicula/detallePelicula.js";
import { cargarPeliculasDestacadas } from "./destacarCarousel.js";
import { cargarSlider } from "./slidePeliculasSeries.js";

cargarPeliculasDestacadas();

cargarSlider();

document.addEventListener('DOMContentLoaded', () => {
    const botonesPlay = document.querySelectorAll('.btn-play');

    botonesPlay.forEach((boton, index) => {
        boton.addEventListener('click', (event) => {
            event.preventDefault();
            cargarPaginaDetalles(index); // Pasamos el índice de la película seleccionada
            window.location.href = 'detalles.html'; // Redirigir a la página de detalles
        });
    });
});

