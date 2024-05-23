import {Usuario} from './Usuario.js';
import {agregarUsuario} from './utils.js';
export const agregarContacto = (email,password) => {
    const usuario = new Usuario(email,password);
  
    agregarUsuario(usuario);
  };