

const $form = document.getElementById("form");

$form.addEventListener("submit", function (e) {
    e.preventDefault();
    const $email = document.getElementById("email").value;
    const $password = document.getElementById("password").value;
    
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const usuarioValido = usuarios.find(user => user.email === $email && user.password === $password);

  if (usuarioValido) {
      localStorage.setItem('currentUser', JSON.stringify(usuarioValido));
        // Redirigir al panel de admin
        window.location.href = './admin.html'; // Redirigir a la página de usuario regular

  } else {
      alert('Correo electrónico o contraseña incorrectos');
  }
});
