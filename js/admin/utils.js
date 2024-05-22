import { obtenerPeliculasSeriesDeLS } from "../commons/utilities.js";

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
  $btnDelete.classList.add("btn", "btn-sm", "btn-danger");
  $btnHighlight.classList.add("btn", "btn-sm", "btn-warning");
  $btnEdit.textContent = "Editar";
  $btnDelete.textContent = "Eliminar";
  $btnHighlight.textContent = "Destacar";
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

  //3. Crear una fila (tr) por cada pelicula o serie
  peliculasSeries.forEach((peliculaSerie, indice) => {
    // Crear fila
    cargarFilaTabla(peliculaSerie, indice + 1);
  });
};
