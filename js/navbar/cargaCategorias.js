import { obtenerCategoriasDeLS } from "../categoria/categoriaLst.js";

document.addEventListener("DOMContentLoaded", function(e){
    e.preventDefault();
    cargarTablaDeCategorias();
});

export const cargarTablaDeCategorias = () => {
    //1. Recuperar las categorias
    const categorias = obtenerCategoriasDeLS();
  
    //2. Vaciar la tabla de los datos anteriores
    const $tbody = document.getElementById("listado-categorias");
    $tbody.innerHTML = "";
  
    //3. Crear una li
    categorias.forEach((categoria) => {
      cargarCategoria(categoria);
    });
  };
export const cargarCategoria =(categoria)=>{
    const $listadoCategorias = document.getElementById("listado-categorias");
    const $li = document.createElement("li");
    const $a = document.createElement("a");
    $a.classList.add("dropdown-item");
    $listadoCategorias.appendChild($li);
    $li.appendChild($a);
    $a.textContent = categoria.nombre;
    $a.href = "./error404.html";
}

