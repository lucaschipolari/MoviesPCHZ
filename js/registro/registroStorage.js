import { obtenerInfoDeLS  } from "./utilsRegistro.js";
export function saveToLocalStorage(usuario) {
   
        // 1. Traemos desde LS lo que haya guardado
        const usuarios= obtenerInfoDeLS("usuarios");

      
        // 2. Agregamos a lo que estaba guardado, lo nuevo
        usuarios.push(usuario);
      
        // 3. Actualizamos los formDatas en LS con los valores nuevos
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
    
}

export function loadFromLocalStorage() {
    const data = localStorage.getItem('usuarios');
    return data ? JSON.parse(data) : null;
}

export function clearLocalStorage() {
    localStorage.removeItem('usuarios');
}