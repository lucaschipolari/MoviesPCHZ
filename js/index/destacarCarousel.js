import { obtenerPeliculasSeriesDestacadasDeLS } from "../commons/utilities.js";

export const cargarPeliculasDestacadas = () => {
    const peliculasDestacadas = obtenerPeliculasSeriesDestacadasDeLS();
    const $carouselInner = document.getElementById("destacar")
    $carouselInner.innerHTML="";

    peliculasDestacadas.forEach((pelicula,index) => {
        const $item = document.createElement("div");
        $item.classList.add("carousel-item");
        if(index === 0) $item.classList.add("active");

        const $img = document.createElement("img");
        $img.src = pelicula.image;
        $img.classList.add("d-block","w-100","carosel-img");
        $img.alt = pelicula.title

        const $caption = document.createElement("div");
        $caption.classList.add("carousel-caption", "d-none", "d-md-block");

        const $captionContent = document.createElement("div");

        const $title = document.createElement("h1")
        $title.classList.add("display-4");
        $title.textContent = pelicula.title;

        const $description = document.createElement("p")
        $description.classList.add("lead")
        $description.textContent = pelicula.description;

        $captionContent.appendChild($title)
        $captionContent.appendChild($description)

        const $higlighButtons = document.createElement("div")
        $higlighButtons.classList.add("highlight-buttons")

        const $btnReproducir = document.createElement("a")
        $btnReproducir.classList.add("btn", "btn-primary", "btn-lg", "btn-orange")
        const $iconoReproducir = document.createElement("i")
        $iconoReproducir.classList.add("fa-regular", "fa-circle-play", "me-1")
        $btnReproducir.appendChild($iconoReproducir)
        $btnReproducir.appendChild(document.createTextNode("Reproducir"))
        

        const $btnInfo = document.createElement("a")
        $btnInfo.classList.add("btn", "btn-outline-secondary", "btn-orange-outline", "btn-lg")
        const $iconoInfo = document.createElement("i")
        $iconoInfo.classList.add("fa-solid", "fa-circle-exclamation", "me-1")
        $btnInfo.appendChild($iconoInfo)
        $btnInfo.appendChild(document.createTextNode("Ver Más"))
        

        $higlighButtons.appendChild($btnReproducir)
        $higlighButtons.appendChild($btnInfo)

        $caption.appendChild($captionContent)
        $caption.appendChild($higlighButtons)

        $item.appendChild($img)
        $item.appendChild($caption)


        $carouselInner.appendChild($item)
    });
}