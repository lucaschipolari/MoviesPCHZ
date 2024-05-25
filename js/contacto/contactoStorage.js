
import { obtenerFormDeLS } from "./utilsContacto.js";
export function saveToLocalStorage(formulario) {
   
        // 1. Traemos desde LS lo que haya guardado
        const formData = obtenerFormDeLS();
      
        // 2. Agregamos a lo que estaba guardado, lo nuevo
        formData.push(formulario);
      
        // 3. Actualizamos los formDatas en LS con los valores nuevos
        localStorage.setItem('formData', JSON.stringify(formData));
    
}

export function loadFromLocalStorage() {
    const data = localStorage.getItem('formData');
    return data ? JSON.parse(data) : null;
}

export function clearLocalStorage() {
    localStorage.removeItem('formData');
}