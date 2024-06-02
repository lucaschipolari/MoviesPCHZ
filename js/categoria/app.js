import { validateCategoria } from "./validatorsCategoria.js";
import { agregarCategoria, editarCategoria } from "./ABMcategoria.js";
import { cargarTabla, existeCategoria, estaEditando, btnCancelarCategoria} from "./utilsCategoria.js";


  cargarTabla();

  const $form = document.getElementById("form");
  const $btnAgregarCategoria = document.getElementById("btnAgregarCategoria");
  const $inputNombreCategoria = document.getElementById("inputNombreCategoria");
  const $inputDescripcionCategoria = document.getElementById("inputDescripcionCategoria");
  const $btnCancelarCategoria = document.getElementById("btnCancelarCategoria");

  
    $inputDescripcionCategoria.addEventListener('blur', () => {
      validateCategoria($inputDescripcionCategoria);
    });


    $inputNombreCategoria.addEventListener('blur', () => {
      validateCategoria($inputNombreCategoria);
    });


    $btnCancelarCategoria.addEventListener('click', () =>{
      if (estaEditando()) {
        sessionStorage.removeItem('codigoCategoria');
        const $alert = document.getElementById('form');
   $alert.classList.add('formulario');
   $alert.classList.remove('formulario-editar');
   const $title = document.getElementById('categoria-a-editar');
   $title.textContent = "";
      }
        $inputNombreCategoria.value = '';
        $inputDescripcionCategoria.value = '';
      
    });
  

    $form.addEventListener('submit', (event) => {
      event.preventDefault();
      console.log('submit');

      if (!validateCategoria($inputNombreCategoria)) {
        alert('Revisá los campos');
        return;
      }

      let nombreCategoria = $inputNombreCategoria.value;
      const descripcionCategoria = $inputDescripcionCategoria.value;

      if (estaEditando()) {
        editarCategoria(nombreCategoria, descripcionCategoria);
        
        
      } else {
        if (!existeCategoria(nombreCategoria)) {
          nombreCategoria = nombreCategoria.toUpperCase();
          agregarCategoria(nombreCategoria, descripcionCategoria);
        }
      }

      $inputNombreCategoria.classList.remove('is-valid', 'is-invalid');
      $inputDescripcionCategoria.classList.remove('is-valid', 'is-invalid');

      cargarTabla();
    });
  
