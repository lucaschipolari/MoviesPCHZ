import { obtenerInfoDeLS  } from "./utilsRegistro.js";
export function saveToLocalStorage(usuario) {
   
        // 1. Traemos desde LS lo que haya guardado
        const usuarios= obtenerInfoDeLS("usuarios");

        const usuarioExistente = usuarios.find(u => u.email === usuario.email);
        if (usuarioExistente) {
            return;
        }
    
        // Verificar si ya existe un usuario administrador
        const adminExistente = usuarios.find(u => u.isAdmin);
        if (usuario.isAdmin && adminExistente) {
            alert('Ya existe un usuario administrador.');
            return;
        }
    
        // Agregar el nuevo usuario al arreglo y guardar en localStorage
        usuarios.push(usuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
    
}

export function loadFromLocalStorage() {
    const data = localStorage.getItem('usuarios');
    return data ? JSON.parse(data) : null;
}

export function clearLocalStorage() {
    localStorage.removeItem('usuarios');
}