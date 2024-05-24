import {
  validateEmail,
  validatePassword,
  validatePasswordConfirmation,
} from "./registroValidaciones.js";
import { Usuario } from "../admin/Usuario.js";

const $form = document.getElementById("form");
const $email = document.getElementById("email");
const $password = document.getElementById("password");
const $password2 = document.getElementById("password2");

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
  validateInputs();
});

export const validateInputs = () => {
  const emailValue = $email.value;
  const passwordValue = $password.value;
  const password2Value = $password2.value;

  const isEmailValid = validateEmail($email);
  const isPasswordValid = validatePassword($password);
  const isPasswordConfirmationValid = validatePasswordConfirmation($password, $password2);

  if (usuarioPreCreado.email === emailValue && isPasswordValid && isPasswordConfirmationValid) {
    swal.fire({
      title: 'Error',
      text: "El usuario ya existe",
      icon: 'error',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Iniciar sesión',
      cancelButtonText: 'Cancelar',
    });
    return false;
  }

  if (isEmailValid && isPasswordValid && isPasswordConfirmationValid ) {
    swal.fire({
      title: 'Exito',
      text: "Has creado tu cuenta correctamente!!",
      icon: 'success',
      showConfirmButton: true,
      showCancelButton: false,
      confirmButtonText: 'Oka',
    });
    return true;
  }

  return false;
};
