import { obtenerPeliculasSeriesDeLS } from "../commons/utilities.js";
import { cargarPeliculasDestacadas } from "./destacarCarousel.js";
import { cargarSlider } from "./slidePeliculasSeries.js";
import {saveToLocalStorage} from "../registro/registroStorage.js";
import { Usuario } from "../registro/Usuario.js";

cargarPeliculasDestacadas();

const usuarioAdmin = new Usuario('admin@admin.com','admin',true);
saveToLocalStorage(usuarioAdmin);
cargarSlider();


  const botonesPlay = document.querySelectorAll(".btn-play");

  botonesPlay.forEach((boton) => {
    boton.addEventListener("click", (event) => {
      event.preventDefault();

      const peliculaId = boton.dataset.id
      
      const peliculas = obtenerPeliculasSeriesDeLS();

      const pelicula = peliculas.find(p => p.code === peliculaId)

      if(pelicula){
      localStorage.setItem("peliculaSeleccionada", JSON.stringify(pelicula));
      window.location.href = "./pages/detallePeliculas.html";
    } else {
      console.error(`No se encontró la película con id ${peliculaId}`);
    }
    });
  });

