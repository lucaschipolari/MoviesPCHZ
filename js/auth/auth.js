import { cargarAdminPages } from "../navbar/cargaCategorias.js";
const currentUserValidate= () => {    
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
        const $iniciarS = document.getElementById('iniciar-sesion');
        const $crearCuenta = document.getElementById('crear-cuenta');
        const $cerrarSesion = document.getElementById('cerrar-sesion');
        const $btnAdmin = document.getElementById('btn-admin');
        $iniciarS.classList.add('d-none');
        $crearCuenta.classList.add('d-none');
        
        if (currentUser.isAdmin) {
            $btnAdmin.classList.remove('d-none');
            $cerrarSesion.classList.remove('d-none');
            cargarAdminPages();
            // Lógica para usuarios administradores
        } else {
            $cerrarSesion.classList.remove('d-none');
            
        }
    } else {
        console.log('No hay usuario autenticado');
    }  
};

const $cerrarSesion = document.getElementById('cerrar-sesion'); 
$cerrarSesion.addEventListener('click', () => {
    localStorage.removeItem('currentUser');
    window.location.href = '../index.html';
});     

document.addEventListener('DOMContentLoaded', () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    currentUserValidate();
    if (!currentUser || !currentUser.isAdmin) {


      window.location.href = '../index.html';
    } else {
      console.log('Welcome Admin');
    }
});