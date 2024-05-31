// detail.js

// Función para obtener las películas y series desde localStorage
const obtenerPeliculasSeriesDeLS = () => {
    return JSON.parse(localStorage.getItem("peliculasSeries")) || [];
  };
  
  document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    const moviesAndSeries = obtenerPeliculasSeriesDeLS();
    const item = moviesAndSeries.find((item) => item.id == id);
  
    if (item) {
      // Actualizar las secciones específicas del HTML
      document.getElementById("title").textContent = item.title;
      document.getElementById("image").src = item.image;
      document.getElementById("description").textContent = item.description;
      document.getElementById("category").textContent = `Categoría: ${item.category}`;
      document.getElementById("trailer").src = item.trailer;
  
      const playButton = document.getElementById("playButton");
      playButton.addEventListener("click", () => {
        window.location.href = "404.html";
      });
  
      // Si es una serie, mostrar las temporadas y episodios
      if (item.type === "series") {
        const seasonsContainer = document.getElementById("seasons");
        item.seasons.forEach((season) => {
          const seasonElement = document.createElement("div");
          seasonElement.innerHTML = `<h2>Temporada ${season.seasonNumber}</h2>`;
  
          season.episodes.forEach((episode) => {
            const episodeElement = document.createElement("p");
            episodeElement.textContent = `Episodio ${episode.episodeNumber}: ${episode.title}`;
            seasonElement.appendChild(episodeElement);
          });
  
          seasonsContainer.appendChild(seasonElement);
        });
      }
    } else {
      document.getElementById("detail").textContent = "No hay detalles";
    }
  });
