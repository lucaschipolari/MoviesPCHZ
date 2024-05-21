import { agregarPeliculaSerie } from "./abm.js";
import { validateTitle, validateUrl } from "./validators.js";

//Seleccion de objetos
const $form = document.getElementById("formMoviesSeries");
const $inputTitle = document.getElementById("input-title");
const $inputType = document.getElementById("input-type");
const $inputImage = document.getElementById("input-image");
const $inputCategory = document.getElementById("input-category");
const $inputDescription = document.getElementById("input-drescription");
const $inputEstaPublicada = document.getElementById("input-estaPublicada");

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

  agregarPeliculaSerie(title, type, image, category, description, estaPublicada)

});
