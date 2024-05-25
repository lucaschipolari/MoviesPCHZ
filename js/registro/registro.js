import {
  validateEmail,
  validatePassword,
  validatePasswordConfirmation,
} from "./registroValidaciones.js";
import { Usuario } from "../admin/Usuario.js";
import { saveToLocalStorage, loadFromLocalStorage, clearLocalStorage } from './registroStorage.js';


const $form = document.getElementById("form");
const $email = document.getElementById("email");
const $password = document.getElementById("password");
const $password2 = document.getElementById("password2");
const $inputControl = document.getElementById("input-control");

window.addEventListener('load', () => {
  const userData = loadFromLocalStorage();
  if (formData) {
      $name.value = formData.name;
      $email.value = formData.email;
      $asunto.value = formData.asunto;
      $mensaje.value = formData.mensaje;
  }
});

const usuarioPreCreado = new Usuario('admin@admin.com', 'admin');

$email.addEventListener("blur", () => {
  validateEmail($email);
});
$password.addEventListener("blur", () => {
  validatePassword($password);
});
$password2.addEventListener("blur", () => {
  validatePasswordConfirmation($password2);
});

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  if(validateInputs()){
    const userData = {
      email: $email.value,
      password: $password.value
    }
    saveToLocalStorage(userData);
    Swal.fire({
      title: 'Exito',
      text: "Has creado tu cuenta correctamente!!",
      icon:'success',
      showConfirmButton: true,
      showCancelButton: false,
      confirmButtonText: 'Oka',
    }).then(() => {
     // clearLocalStorage();  // Clear the data if needed after successful submission
      $form.reset();
      $inputControl.classList.remove("success","error");

  });
  };
});


export const validateInputs = () => {

  const isEmailValid = validateEmail($email);
  const isPasswordValid = validatePassword($password);
  const isPasswordConfirmationValid = validatePasswordConfirmation($password, $password2);

  return isEmailValid && isPasswordValid && isPasswordConfirmationValid;
};
