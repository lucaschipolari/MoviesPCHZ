// detail.js

// Función para obtener las películas y series desde localStorage
const obtenerPeliculasSeriesDeLS = () => {
    return JSON.parse(localStorage.getItem("peliculasSeries")) || [];
};

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const moviesAndSeries = obtenerPeliculasSeriesDeLS();
    const item = moviesAndSeries.find(item => item.id == id);

    if (item) {
        const detailContainer = document.getElementById('detail');
        
        const titleElement = document.createElement('h1');
        titleElement.textContent = item.title;
        
        const imageElement = document.createElement('img');
        imageElement.src = item.image;
        
        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = item.description;
        
        const categoryElement = document.createElement('p');
        categoryElement.textContent = `Categoría: ${item.category}`;
        
        const trailerElement = document.createElement('iframe');
        trailerElement.src = item.trailer;
        trailerElement.width = "560";
        trailerElement.height = "315";
        trailerElement.allowFullscreen = true;

        const playButton = document.createElement('button');
        playButton.textContent = 'Reproducir';
        playButton.addEventListener('click', () => {
            window.location.href = '404.html';
        });

        detailContainer.appendChild(titleElement);
        detailContainer.appendChild(imageElement);
        detailContainer.appendChild(descriptionElement);
        detailContainer.appendChild(categoryElement);
        detailContainer.appendChild(trailerElement);
        detailContainer.appendChild(playButton);

        if (item.type === 'series') {
            const seasonsContainer = document.createElement('div');
            item.seasons.forEach(season => {
                const seasonElement = document.createElement('div');
                seasonElement.innerHTML = `<h2>Temporada ${season.seasonNumber}</h2>`;
                
                season.episodes.forEach(episode => {
                    const episodeElement = document.createElement('p');
                    episodeElement.textContent = `Episodio ${episode.episodeNumber}: ${episode.title}`;
                    seasonElement.appendChild(episodeElement);
                });
                
                seasonsContainer.appendChild(seasonElement);
            });
            detailContainer.appendChild(seasonsContainer);
        }
    } else {
        document.getElementById('detail').textContent = 'No hay detalles';
    }
});
