import {
  obtenerPeliculasSeriesDeLS,
  obtenerPeliculasSeriesDestacadasDeLS,
} from "../commons/utilities.js";
import { PeliculaSerie } from "./PeliculaSerie.js";
import { cargarTabla } from "./utils.js";

export const agregarPeliculaSerie = (
  title,
  type,
  image,
  category,
  description,
  estaPublicada,
  banner,
  video
) => {
  const peliculaSerie = new PeliculaSerie(
    title,
    type,
    image,
    category,
    description,
    estaPublicada,
    banner,
    video
  );

  //1. Traemos desde LS lo que haya guardado
  const peliculasSeries = obtenerPeliculasSeriesDeLS();

  //2. Agregamos a lo que estaba guardado, lo nuevo
  peliculasSeries.push(peliculaSerie);

  //3. Actualizamos los contactos en LS con los valores nuevos
  localStorage.setItem("peliculasSeries", JSON.stringify(peliculasSeries));
};

export const editarPeliculaSerie = (
  title,
  type,
  image,
  category,
  description,
  estaPublicada,
  banner,
  video
) => {
  const peliculasSeries = obtenerPeliculasSeriesDeLS();
  const idPeliculaSerie = sessionStorage.getItem("idPeliSerie");

  const posicionPeliculaSerie = peliculasSeries.findIndex((peliculaSerie) => {
    return peliculaSerie.code === idPeliculaSerie;
  });

  if (posicionPeliculaSerie === -1) {
    alert("La pelicula o serie no se encontro");
    sessionStorage.removeItem("idPeliSerie");
    return;
  }

  // const nuevaPeliculasSerie = new PeliculaSerie(
  //   title,
  //   type,
  //   image,
  //   category,
  //   description,
  //   estaPublicada
  // );

  // peliculasSeries.splice(posicionPeliculaSerie, 1, nuevaPeliculasSerie);
  peliculasSeries[posicionPeliculaSerie].title = title;
  peliculasSeries[posicionPeliculaSerie].type = type;
  peliculasSeries[posicionPeliculaSerie].image = image;
  peliculasSeries[posicionPeliculaSerie].category = category;
  peliculasSeries[posicionPeliculaSerie].description = description;
  peliculasSeries[posicionPeliculaSerie].estaPublicada = estaPublicada;
  peliculasSeries[posicionPeliculaSerie].banner = banner;
  peliculasSeries[posicionPeliculaSerie].video = video;

  localStorage.setItem("peliculasSeries", JSON.stringify(peliculasSeries));

  sessionStorage.removeItem("idPeliSerie");

  const $alert = document.getElementById("alert-edicion");
  $alert.classList.add("d-none");

  const $buttonCancelar = document.getElementById("btn-cancelar");
  $buttonCancelar.classList.add("d-none");
};

 export const eliminarPeliculaSerie = (idPeliculaSerie, tituloPeliculaSerie) => {
   swal
     .fire({
       title: "Atencion",
       text: `¿Estas seguro que deseas eliminar ${tituloPeliculaSerie}?`,
       icon: "warning",
       showConfimButton: true,
       showCancelButton: true,
       confirmButtonText: "Si, elminar",
       cancelButtonText: "No, cancelar",
     })
     .then((result) => {
       if (result.isConfirmed) {
         //Eliminar pelicula de la lista principal
         const peliculasSeries = obtenerPeliculasSeriesDeLS();
         const nuevasPeliculasSeries = peliculasSeries.filter(
           (peliculaSerie) => peliculaSerie.code != idPeliculaSerie
         );
         localStorage.setItem(
           "peliculasSeries",
           JSON.stringify(nuevasPeliculasSeries)
         );

         //Eliminar la pelicula de la lista de destacados, si esta presente
         let peliculasDestacadas = obtenerPeliculasSeriesDestacadasDeLS();
         const nuevasPeliculasDestacadas = peliculasDestacadas.filter(
           (peliculaDestacada) => peliculaDestacada.code !== idPeliculaSerie
         );
         if (peliculasDestacadas.length !== nuevasPeliculasDestacadas.length) {
           localStorage.setItem(
             "peliculasDestacadas",
             JSON.stringify(nuevasPeliculasDestacadas)
           );
         }

         cargarTabla();

         swal.fire({
           title: "Exito",
           text: `${tituloPeliculaSerie} eliminado correctamente`,
           icon: "success",
           showConfimButton: true,
           showCancelButton: false,
           confirmButtonText: "tremedo",
         });
       }
     });
 };



 