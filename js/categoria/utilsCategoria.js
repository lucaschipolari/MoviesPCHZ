import { obtenerCategoriasDeLS } from './categoriaLst.js';
import { eliminarCategoria } from './ABMcategoria.js';
import {Categoria} from './Categoria.js';

const $inputNombreCategoria=document.getElementById("inputNombreCategoria");
const $inputDescripcionCategoria=document.getElementById("inputDescripcionCategoria");
const $btnAgregarCategoria=document.getElementById("btnAgregarCategoria");
const $btnCancelarCategoria=document.getElementById("btnCancelarCategoria");
//const $modalAgregarCategoria=document.getElementById("modalAgregarCategoria");




export const agregarCategoriasALS = (categoria) => {
  let categorias = obtenerCategoriasDeLS();
  categorias.push(categoria); // Agregar la nueva categoría a la lista de categorías
  localStorage.setItem('categorias', JSON.stringify(categorias));
};

const cargarFilaTabla = (categoria, indice) => {
  const $tbody = document.getElementById('tbody-categoria');

  const $tr = document.createElement('tr');

  const $tdIndice = document.createElement('td');
  $tdIndice.classList.add('text-white', 'text-center', 'fw-bold');
  $tdIndice.textContent = indice;
  $tr.appendChild($tdIndice);

  const $tdNombre = document.createElement('td');
  $tdNombre.classList.add('text-white', 'w-25');
  $tdNombre.textContent = categoria.nombreCategoria;
  $tr.appendChild($tdNombre);

  const $tdDescripcion = document.createElement('td');
  $tdDescripcion.classList.add('text-white', 'w-25');
  $tdDescripcion.textContent = categoria.descripcion;
  $tr.appendChild($tdDescripcion);

  const $tdAcciones = document.createElement('td');
  if (categoria.nombre !== "INDEFINIDA") {
    const $btnEditar = document.createElement('button');
    const $btnEliminar = document.createElement('button');
    $btnEditar.classList.add('btn', 'btn-sm', 'btn-editar','mb-1','me-2','col-12', 'col-md-5');
    $btnEliminar.classList.add('btn', 'btn-sm', 'btn-danger', 'mb-1','col-12','col-md-5');
    $btnEditar.innerHTML = 'Editar <i class="fas fa-pencil-alt"></i>'; 
    $btnEliminar.innerHTML = 'Eliminar <i class="fas fa-trash"></i>'; 
    $btnEditar.onclick = () => {
      prepararEdicionCategoria(categoria);
    };
    $btnEliminar.onclick = () => {
      eliminarCategoria(categoria.id, categoria.nombreCategoria);
    };
    $tdAcciones.appendChild($btnEditar);
    $tdAcciones.appendChild($btnEliminar);
  } else{
    $tdAcciones.classList.add('text-white', 'text-center', 'fw-bold');
    $tdAcciones.textContent = 'No se puede eliminar ni editar';
  }
  $tr.appendChild($tdAcciones);
  $tbody.appendChild($tr);

};

export const cargarTabla = () => {
const categorias = obtenerCategoriasDeLS();

if (!categorias || categorias.length === 0) {
      const categoriaPredeterminada = new Categoria('INDEFINIDA', 'La pelicula actual se encuentra sin una categoria.');
      agregarCategoriasALS(categoriaPredeterminada); 
    }
  const $tbody = document.getElementById('tbody-categoria');
  $tbody.innerHTML = '';
  categorias.forEach((categoria, indice) => {
    cargarFilaTabla(categoria, indice + 1);
  });
};

export function existeCategoria(nombreCategoria) {
  nombreCategoria = nombreCategoria.toUpperCase();
  const categorias = obtenerCategoriasDeLS();
  for (const cat of categorias) {
    if (cat.nombre === nombreCategoria) {
      const mensaje = `Esa categoría ya existe, por favor, intente de nuevo`;
      swal.fire({
        title: 'Error',
        text: mensaje,
        icon: 'error',
        showConfirmButton: true,
        showCancelButton: false,
        confirmButtonText: '¡OK!',
      });
      return true; 
    }
  }
  return false; 
}
export const prepararEdicionCategoria = (categoria) => {
  const $inputNombreCategoria=document.getElementById("inputNombreCategoria");
  const $inputDescripcionCategoria=document.getElementById("inputDescripcionCategoria");

  $inputNombreCategoria.value = categoria.nombreCategoria;
  $inputDescripcionCategoria.value = categoria.descripcion;

  sessionStorage.setItem('codigoCategoria', categoria.id);

   const $alert = document.getElementById('form');
   $alert.classList.remove('formulario');
   $alert.classList.add('formulario-editar');
   const $title = document.getElementById('categoria-a-editar');
   $title.textContent = `Estas por editar a la categoría "${categoria.nombreCategoria}" `;
   

};

export const estaEditando = () => {
  return !!sessionStorage.getItem('codigoCategoria');
};

export function btnCancelarCategoria(){
    if (estaEditando()) {
      sessionStorage.removeItem('codigoCategoria');
    }
    $inputNombreCategoria.value = '';
    $inputDescripcionCategoria.value = '';
    /*const $spanCategoria = document.getElementById('alert-edicion-categoria');
    $spanCategoria.classList.add('d-none');*/
    alert("hola");
    /*const modalInstance = bootstrap.Modal.getInstance($modalAgregarCategoria);
    modalInstance.hide();*/
}