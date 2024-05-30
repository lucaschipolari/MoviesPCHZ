export const obtenerInfoDeLS = (usuarios) => {
    return JSON.parse(localStorage.getItem(usuarios)) || [];
  };