import {
  guardarPeliculasDestacadasEnLS,
  obtenerPeliculasSeriesDeLS,
  obtenerPeliculasSeriesDestacadasDeLS,
} from "../commons/utilities.js";
import { cargarTabla } from "./utils.js";

export const destacarPeliculaSerie = (idPeliculaSerie) => {
  const peliculasSeries = obtenerPeliculasSeriesDeLS();
  let peliculasDestacadas = obtenerPeliculasSeriesDestacadasDeLS();
  const peliculaSerie = peliculasSeries.find(
    (pelicula) => pelicula.code === idPeliculaSerie
  );

  if (peliculaSerie) {
    const esDestacada = peliculasDestacadas.find(
      (p) => p.code === idPeliculaSerie
    );
    if (esDestacada) {
      peliculasDestacadas = peliculasDestacadas.filter(
        (p) => p.code !== idPeliculaSerie
      );
      alert("Película quitada de destacados con éxito");
    } else {
      peliculasDestacadas.push(peliculaSerie);
      alert("Pelicula destacada con exito");
    }
    guardarPeliculasDestacadasEnLS(peliculasDestacadas);
    cargarTabla();
    // actualizarCarruselDestacado();
  }
};
