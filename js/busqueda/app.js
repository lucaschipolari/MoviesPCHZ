import { obtenerPeliculasSeriesDeLS } from "../commons/utilities.js";

const $searchButton = document.getElementById("searchButton");
const $searchInput = document.getElementById("searchInput");

const crearContenedorResultados = (pelicula) => {
  const $col = document.createElement("div");
  $col.classList.add("col-md-3");

  const $resultItem = document.createElement("div");
  $resultItem.classList.add("result-item");

  const $img = document.createElement("img");
  $img.src = pelicula.image;
  $img.alt = pelicula.title;

  const $title = document.createElement("div");
  $title.classList.add("title");
  $title.textContent = pelicula.title;

  const $description = document.createElement("div");
  $description.classList.add("description");
  $description.textContent = pelicula.description;

  $resultItem.appendChild($img);
  $resultItem.appendChild($title);
  $resultItem.appendChild($description);
  $col.appendChild($resultItem);

  return $col;
};

const displayResults = (results) => {
  const $searchResults = document.getElementById("searchResults");
  $searchResults.innerHTML = "";

  if (results.length === 0) {
    const noResultsMessage = document.createElement("div");
    noResultsMessage.textContent = "No se encontraron resultados.";
    $searchResults.appendChild(noResultsMessage);
  } else {
    results.forEach((pelicula) => {
      $searchResults.appendChild(crearContenedorResultados(pelicula));
    });
  }
};

$searchButton.addEventListener("click", () => {
  const query = $searchInput.value.toLowerCase();
  const peliculasSeries = obtenerPeliculasSeriesDeLS();
  const filteredResults = peliculasSeries.filter(
    (pelicula) =>
      pelicula.title.toLowerCase().includes(query) ||
      pelicula.description.toLowerCase().includes(query) ||
      pelicula.category.toLowerCase().includes(query)
  );
  displayResults(filteredResults);
});
