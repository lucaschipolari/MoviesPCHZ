import {
  validateEmail,
  validatePassword,
  validatePasswordConfirmation,
} from "./registroValidaciones.js";

const $form = document.getElementById("form");
const $email = document.getElementById("email");
const $password = document.getElementById("password");
const $password2 = document.getElementById("password2");

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


  validateEmail($email);
  validatePassword($password);
  validatePasswordConfirmation($password, $password2);

  if ($email && $password && $password2) {
    swal.fire({
        title: 'Exito',
        text: mensaje,
        icon: 'success',
        showConfirmButton: true,
        showCancelButton: false,
        confirmButtonText: 'Tremen2',
      });
    return true;

  }

  return false;
};
