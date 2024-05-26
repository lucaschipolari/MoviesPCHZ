export const obtenerInfoDeLS = (formData) => {
    return JSON.parse(localStorage.getItem(formData)) || [];
};
  