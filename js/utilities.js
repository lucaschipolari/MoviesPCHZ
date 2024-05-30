export const obtenerPeliculasSeriesDeLS = () => {
  return JSON.parse(localStorage.getItem("peliculasSeries")) || [];
};



