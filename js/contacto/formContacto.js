import { validateName, validateEmail, validateAsunto, validateMensaje } from './contactoValidaciones.js';
import { saveToLocalStorage, loadFromLocalStorage, clearLocalStorage } from './formContactoStorage.js';
import { FormularioContacto } from './FormularioContacto.js';  

  const $form = document.getElementById("form");
  const $name = document.getElementById("name");
  const $email = document.getElementById("email");
  const $asunto = document.getElementById("asunto");
  const $mensaje = document.getElementById("mensaje");
  const $inputControl = [
    document.getElementById('input-control-1'),
    document.getElementById('input-control-2'),
    document.getElementById('input-control-3'),
    document.getElementById('input-control-4')
  ];
  //En caso de querer eliminar el contenido en localstorage
//   document.addEventListener('DOMContentLoaded', function (){
//   clearLocalStorage();
// });

  
  $name.addEventListener("blur", () => validateName($name));
  $email.addEventListener("blur", () => validateEmail($email));
  $asunto.addEventListener("blur", () => validateAsunto($asunto));
  $mensaje.addEventListener("blur", () => validateMensaje($mensaje));
  
  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validateInputs()) {
        const formContacto = new FormularioContacto($name.value,$email.value,$asunto.value,$mensaje.value);
        saveToLocalStorage(formContacto);
        Swal.fire({
            title: 'Exito',
            text: "Has enviado tu mensaje correctamente!!",
            icon: 'success',
            showConfirmButton: true,
        }).then(() => {
           
            $form.reset();
            $inputControl.forEach(element => {
                element.classList.remove('success');
            });
        });
    }
});

const validateInputs = () => {
    
    const isNameValid = validateName($name);
    const isEmailValid = validateEmail($email);
    const isAsuntoValid = validateAsunto($asunto);
    const isMensajeValid = validateMensaje($mensaje);
    
    return isNameValid && isEmailValid && isAsuntoValid && isMensajeValid;
  };
  