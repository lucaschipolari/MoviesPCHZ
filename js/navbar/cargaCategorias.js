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
    $a.textContent = categoria.nombreCategoria;
    $a.href = "./error404.html";
}

export const cargarAdminPages = () => {
  const $adminPages = document.getElementById("admin-pages");
  const $li = document.createElement("li");
  const $a = document.createElement("a");
  $a.classList.add("dropdown-item");
  $adminPages.appendChild($li);
  $li.appendChild($a);
  $a.textContent = "Categorias";
  $a.href = "../pages/abmCategoria.html";

  const $li2 = document.createElement("li");
  const $a2 = document.createElement("a");
  $a2.classList.add("dropdown-item");
  $adminPages.appendChild($li2);
  $li2.appendChild($a2);
  $a2.textContent = "Carga y Edicion de P/S";
  $a2.href = "../pages/admin.html";


};

