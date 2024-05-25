export const obtenerFormDeLS = () => {
    return JSON.parse(localStorage.getItem('contactos')) || [];
};
  