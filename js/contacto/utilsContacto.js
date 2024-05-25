export const obtenerFormDeLS = () => {
    return JSON.parse(localStorage.getItem('formData')) || [];
};
  