export const obtenerPeliculasSeriesDeLS = () => {
  return JSON.parse(localStorage.getItem("peliculasSeries")) || [];
};

export const obtenerPeliculasSeriesDestacadasDeLS = () => {
  return JSON.parse(localStorage.getItem("peliculasDestacadas")) || [];
}

export const guardarPeliculasDestacadasEnLS = (peliculasDestacadas) => {
  localStorage.setItem("peliculasDestacadas", JSON.stringify(peliculasDestacadas));
}

