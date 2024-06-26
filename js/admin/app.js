import { agregarPeliculaSerie, editarPeliculaSerie } from "./abm.js";
import { cargarTabla, estaEditando } from "./utils.js";
import {
  validateDescription,
  validateTitle,
  validateUrl,
} from "./validators.js";

//Cargar tabla
cargarTabla();

//Seleccion de objetos
const $form = document.getElementById("formMoviesSeries");
const $inputTitle = document.getElementById("input-title");
const $inputType = document.getElementById("input-type");
const $inputImage = document.getElementById("input-image");
const $inputCategory = document.getElementById("input-category");
const $inputDescription = document.getElementById("input-drescription");
const $inputEstaPublicada = document.getElementById("input-estaPublicada");
const $inputBanner = document.getElementById("input-banner");
const $inputVideo = document.getElementById("input-video");

$inputTitle.addEventListener("blur", () => {
  validateTitle($inputTitle);
});
$inputType.addEventListener("blur", () => {
  validateTitle($inputType);
});
$inputImage.addEventListener("blur", () => {
  validateUrl($inputImage);
});
$inputCategory.addEventListener("blur", () => {
  validateTitle($inputCategory);
});
$inputDescription.addEventListener("blur", () => {
  validateDescription($inputDescription);
});
$inputEstaPublicada.addEventListener("blur", () => {
  validateTitle($inputEstaPublicada);
});
$inputBanner.addEventListener("blur", () => {
  validateUrl($inputBanner);
});
$inputVideo.addEventListener("blur", () => {
  validateUrl($inputVideo);
});

//Event Listener del submit
$form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Validar los campos
  if (!validateTitle($inputTitle) || !validateUrl($inputImage)) {
    alert("Revisar los campos");
    return;
  }

  //Todo ok, conseguir valores
  const title = $inputTitle.value;
  const type = $inputType.value;
  const image = $inputImage.value;
  const category = $inputCategory.value;
  const description = $inputDescription.value;
  const estaPublicada = $inputEstaPublicada.value;
  const banner = $inputBanner.value;
  const video = $inputVideo.value;

  if (estaEditando()) {
    console.log("editando");
    editarPeliculaSerie(
      title,
      type,
      image,
      category,
      description,
      estaPublicada,
      banner,
      video
    );
  } else {
    agregarPeliculaSerie(
      title,
      type,
      image,
      category,
      description,
      estaPublicada,
      banner,
      video
    );
  }

  //Resetear formulario
  $form.reset();
  $inputTitle.classList.remove("is-valid", "is-invalid");
  $inputType.classList.remove("is-valid", "is-invalid");
  $inputImage.classList.remove("is-valid", "is-invalid");
  $inputCategory.classList.remove("is-valid", "is-invalid");
  $inputDescription.classList.remove("is-valid", "is-invalid");
  $inputEstaPublicada.classList.remove("is-valid", "is-invalid");
  $inputBanner.classList.remove("is-valid", "is-invalid");
  $inputVideo.classList.remove("is-valid", "is-invalid");

  //Actualizar tabla
  cargarTabla();

  //Notificar al usuario

  let mensaje = `${title} fue agregado exitosamente`;
  if (estaEditando()) mensaje = `${title} editada exitosamente`;
  swal.fire({
    title: "Exito",
    text: mensaje,
    icon: "success",
    showConfimButton: true,
    showCancelButton: false,
    confirmButtonText: "Ooo... Sugoi!",
    customClass: {
      popup: "swal2-custom"
    }
  });
});

// Cancelar edicion
document.getElementById("btn-cancelar").addEventListener("click", () => {
  document.getElementById("formMoviesSeries").reset(); // Restablece el formulario
  document.getElementById("btn-cancelar").classList.add("d-none"); // Oculta el botón Cancelar
  document.getElementById("alert-edicion").classList.add("d-none"); // Oculta el mensaje de edición
  document.getElementById("formMoviesSeries").onsubmit = agregarPeliculaSerie; // Restaura el evento de submit para agregar una película o serie
});