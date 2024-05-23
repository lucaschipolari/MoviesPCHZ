import { obtenerUsuariosDeLS } from "../utilities";
export const agregarUsuario = (contacto) => {
    // 1. Traemos desde LS lo que haya guardado
    const contactos = obtenerUsuariosDeLS();
  
    // 2. Agregamos a lo que estaba guardado, lo nuevo
    contactos.push(contacto);
  
    // 3. Actualizamos los contactos en LS con los valores nuevos
    localStorage.setItem('contactos', JSON.stringify(contactos));
  };