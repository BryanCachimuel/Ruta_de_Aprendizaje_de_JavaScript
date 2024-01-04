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