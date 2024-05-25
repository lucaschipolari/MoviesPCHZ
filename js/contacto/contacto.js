import { validateName, validateEmail, validateAsunto, validateMensaje } from './contactoValidaciones.js';
import { saveToLocalStorage, loadFromLocalStorage, clearLocalStorage } from './contactoStorage.js';
  
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
  
 /* window.addEventListener('load', () => {
    const formData = loadFromLocalStorage();
    if (formData) {
        $name.value = formData.name;
        $email.value = formData.email;
        $asunto.value = formData.asunto;
        $mensaje.value = formData.mensaje;
    }
});*/

  
  $name.addEventListener("blur", () => validateName($name));
  $email.addEventListener("blur", () => validateEmail($email));
  $asunto.addEventListener("blur", () => validateAsunto($asunto));
  $mensaje.addEventListener("blur", () => validateMensaje($mensaje));
  
  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validateInputs()) {
        const formData = {
            name: $name.value,
            email: $email.value,
            asunto: $asunto.value,
            mensaje: $mensaje.value,
        };
        saveToLocalStorage(formData);
        Swal.fire({
            title: 'Exito',
            text: "Has enviado tu mensaje correctamente!!",
            icon: 'success',
            showConfirmButton: true,
        }).then(() => {
           // clearLocalStorage();  // Clear the data if needed after successful submission
            $form.reset();
        });
    }
});

const validateInputs = () => {
    
    const isNameValid = validateName($name);
    const isEmailValid = validateEmail($email);
    const isAsuntoValid = validateAsunto($asunto);
    const isMensajeValid = validateMensaje($mensaje);
    
    $inputControl.classList.remove('success');
    return isNameValid && isEmailValid && isAsuntoValid && isMensajeValid;
  };
  