/* tomo todos los elementos del html */
const formBusqueda = document.querySelector("#form-busqueda");
const cajaBusqueda = document.querySelector("#caja-busqueda");
const resultadoBusqueda = document.querySelector("#resultado-busqueda");
const mostrarMas = document.querySelector("#mostrar-mas");

/* variable que guarda la palabra a buscar */
let keyword = "";

/* número de página de busqueda */
let page = 1;

const accessKey = "4RPJjJ4cvxukR5cs35bG1-p7NxJRYbUzDH75X2gzOg0";

/* función que trae los resultados de las imagenes */
async function buscarImagenes(){

    /* tomo el valor que es ingresado por el usuario */
    keyword = cajaBusqueda.value;

    /* se arma la url */
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    /* realizo la busqueda */
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    /* 
        se controla si es la primera vez que se busco. Si es así se 
        limpia el contenedor
     */
        if(page === 1){
            resultadoBusqueda.innerHTML = "";
        }
    
        /*  coloco los resultados de la busqueda en el contenedor */
        const resultados = data.results;
        
        /* por cada resultado armo un enlace a y adentro le agrego la imagen */
        resultados.map((result) => {
            const imagen = document.createElement("img");
            imagen.src = result.urls.small;
            const imagenLink = document.createElement("a");
            imagenLink.href = result.links.html;
            imagenLink.target = "_blank";
    
            /* agrego el elemento */
            imagenLink.appendChild(imagen);
            resultadoBusqueda.appendChild(imagenLink);
    
            mostrarMas.style.display = "block";
        })
}

/*
    agrego funcionalidad para cuando se presione enter 
    o se haga click en el boton buscar
*/
formBusqueda.addEventListener("submit", (e) => {

    /* evito que se recargue la página */
    e.preventDefault();
    page = 1;

    /* llamo a la función */
    buscarImagenes();
})


