import { validateCategoria } from "./validatorsCategoria.js";
import { agregarCategoria, editarCategoria } from "./ABMcategoria.js";
import { cargarTabla, existeCategoria, estaEditando, btnCancelarCategoria} from "./utilsCategoria.js";


  cargarTabla();

  const $form = document.getElementById("form");
  const $btnAgregarCategoria = document.getElementById("btnAgregarCategoria");
  const $inputNombreCategoria = document.getElementById("inputNombreCategoria");
  const $inputDescripcionCategoria = document.getElementById("inputDescripcionCategoria");
  const $btnCancelarCategoria = document.getElementById("btnCancelarCategoria");

  if ($inputNombreCategoria) {
    $inputNombreCategoria.addEventListener('blur', () => {
      validateCategoria($inputNombreCategoria);
    });
  }

  if ($btnCancelarCategoria) {
    $btnCancelarCategoria.addEventListener('click', btnCancelarCategoria);
  }

  if ($form) {
    $form.addEventListener('submit', (event) => {
      event.preventDefault();
     

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
  }

 /* $form.addEventListener('hidden.bs.modal', () => {
    $inputNombreCategoria.classList.remove('is-valid', 'is-invalid');
    $inputDescripcionCategoria.classList.remove('is-valid', 'is-invalid');
  });
*/