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

   
}

