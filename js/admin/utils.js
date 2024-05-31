import { obtenerPeliculasSeriesDeLS, obtenerPeliculasSeriesDestacadasDeLS } from "../commons/utilities.js";
import { eliminarPeliculaSerie } from "./abm.js";
import { destacarPeliculaSerie } from "./destacarPeliculasSeries.js";

const cargarFilaTabla = (peliculaSerie, indice) => {
  const $tbody = document.getElementById("tbodyMovieSeries");

  const $tr = document.createElement("tr");

  // indice
  const $tdIndice = document.createElement("td");
  $tdIndice.textContent = indice;
  $tr.appendChild($tdIndice);

  // Imagen
  const $tdImagen = document.createElement("td");
  const $imagen = document.createElement("img");
  $imagen.src = peliculaSerie.image;
  $imagen.alt = peliculaSerie.title;
  $imagen.classList.add("imagen-tabla");
  $tdImagen.appendChild($imagen);
  $tr.appendChild($tdImagen);

  // Titulo
  const $tdTitulo = document.createElement("td");
  $tdTitulo.textContent = peliculaSerie.title;
  $tr.appendChild($tdTitulo);

  // Tipo
  const $tdType = document.createElement("td");
  $tdType.textContent = peliculaSerie.type;
  $tr.appendChild($tdType);

  // Categoria
  const $tdCategory = document.createElement("td");
  $tdCategory.textContent = peliculaSerie.category;
  $tr.appendChild($tdCategory);

  // Descripcion
  const $tdDescription = document.createElement("td");
  $tdDescription.textContent = peliculaSerie.description;
  $tr.appendChild($tdDescription);

  // estaPublicada
  const $tdEstaPublicada = document.createElement("td");
  $tdEstaPublicada.textContent = peliculaSerie.estaPublicada;
  $tr.appendChild($tdEstaPublicada);

  // Acciones
  const $tdActions = document.createElement("td");
  const $btnEdit = document.createElement("button");
  const $btnDelete = document.createElement("button");
  const $btnHighlight = document.createElement("button");
  $btnEdit.classList.add("btn", "btn-sm", "btn-primary");
  $btnDelete.classList.add("btn", "btn-sm", "btn-danger", "mx-2");
  $btnHighlight.classList.add("btn", "btn-sm", "btn-warning");
  $btnEdit.textContent = "Editar";
  $btnDelete.textContent = "Eliminar";

  const peliculasDestacadas = obtenerPeliculasSeriesDestacadasDeLS();
  const esDestacada = peliculasDestacadas.some(p => p.code === peliculaSerie.code)
  $btnHighlight.textContent = esDestacada ? "Quitar Destacado" : "Destacar";
 
  $btnEdit.onclick = () => {
    prepararEdicion(peliculaSerie);
    document.getElementById("titulo-formulario").scrollIntoView({behavior: "smooth"})
  };
  $btnDelete.onclick = () => {
    eliminarPeliculaSerie(peliculaSerie.code, peliculaSerie.title);
  };
  $btnHighlight.onclick = () => {
    destacarPeliculaSerie(peliculaSerie.code);
  };
  $tdActions.appendChild($btnEdit);
  $tdActions.appendChild($btnDelete);
  $tdActions.appendChild($btnHighlight);
  $tr.appendChild($tdActions);

  $tbody.appendChild($tr);
};

export const cargarTabla = () => {
  //1. Recuperar las peliculas y series
  const peliculasSeries = obtenerPeliculasSeriesDeLS();

  //2. Vaciar la tabla de los datos anteriores
  const $tbody = document.getElementById("tbodyMovieSeries");
  $tbody.innerHTML = "";

  //3. Crear una fila (tr) por cada pelicula o serie
  peliculasSeries.forEach((peliculaSerie, indice) => {
    // Crear fila
    cargarFilaTabla(peliculaSerie, indice + 1);
  });
};

export const prepararEdicion = (peliculaSerie) => {
  const $inputTitle = document.getElementById("input-title");
  const $inputType = document.getElementById("input-type");
  const $inputImage = document.getElementById("input-image");
  const $inputCategory = document.getElementById("input-category");
  const $inputDescription = document.getElementById("input-drescription");
  const $inputEstaPublicada = document.getElementById("input-estaPublicada");
  const $inputBanner = document.getElementById("input-banner");
  const $inputVideo = document.getElementById("input-video");

  $inputTitle.value = peliculaSerie.title;
  $inputType.value = peliculaSerie.type;
  $inputImage.value = peliculaSerie.image;
  $inputCategory.value = peliculaSerie.category;
  $inputDescription.value = peliculaSerie.description;
  $inputEstaPublicada.value = peliculaSerie.estaPublicada;
  $inputBanner.value = peliculaSerie.banner;
  $inputVideo.value = peliculaSerie.video;

  sessionStorage.setItem("idPeliSerie", peliculaSerie.code);

  const $alert = document.getElementById("alert-edicion");
  const $spanPeliculaSerie = document.getElementById("nombre-pelicula-serie");
  $alert.classList.remove("d-none");
  $spanPeliculaSerie.textContent = peliculaSerie.title;

  const $buttonCancelar = document.getElementById("btn-cancelar");
  $buttonCancelar.classList.remove("d-none");
};

export const estaEditando = () => {
  const id = sessionStorage.getItem("idPeliSerie");

  return !!id;
};
