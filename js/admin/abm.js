import { obtenerPeliculasSeriesDeLS } from "../commons/utilities.js";
import { PeliculaSerie } from "./PeliculaSerie.js";

export const agregarPeliculaSerie = (
  title,
  type,
  image,
  category,
  description,
  estaPublicada
) => {
  const peliculaSerie = new PeliculaSerie(
    title,
    type,
    image,
    category,
    description,
    estaPublicada
  );

  //1. Traemos desde LS lo que haya guardado
  const peliculasSeries = obtenerPeliculasSeriesDeLS();

  //2. Agregamos a lo que estaba guardado, lo nuevo
  peliculasSeries.push(peliculaSerie);

  //3. Actualizamos los contactos en LS con los valores nuevos
  localStorage.setItem("peliculasSeries", JSON.stringify(peliculasSeries));
};

export const editarPeliculaSerie = () => {};

export const eliminarPeliculaSerie = () => {};
