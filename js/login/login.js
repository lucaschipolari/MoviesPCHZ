

const $form = document.getElementById("form");

$form.addEventListener("submit", function (e) {
    e.preventDefault();
    const $email = document.getElementById("email").value;
    const $password = document.getElementById("password").value;
    console.log($email);
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const usuarioValido = usuarios.find(user => user.email === $email && user.password === $password);

  if (usuarioValido) {
      localStorage.setItem('currentUser', JSON.stringify(usuarioValido));
      window.location.href = 'contacto.html';
      console.log("hola");
  } else {
      alert('Correo electrónico o contraseña incorrectos');
  }
});
