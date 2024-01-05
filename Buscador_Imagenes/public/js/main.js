/* tomo todos los elementos del html */
//Tomamos todos los elementos del html
const formBusqueda = document.querySelector("#form-busqueda");
const cajaBusqueda = document.querySelector("#caja-busqueda");
const resultadoBusqueda = document.querySelector("#resultado-busqueda");
const mostrarMas = document.querySelector("#mostrar-mas");

let keyword = "";//variable que guarda la palabra a buscar
let page = 1; //número de pàgina de busqueda

const accessKey = "4RPJjJ4cvxukR5cs35bG1-p7NxJRYbUzDH75X2gzOg0";

//Función que trae los resultados
async function buscarImagenes(){
    //tomo el valor que ingresó el usuario
    keyword = cajaBusqueda.value;
    //armo la url
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;

    //realizo la busqueda
    const response = await fetch(url);
    const data = await response.json();

    //console.log(data);

    //controlo, si es la primera vez que busco limpio el contendor
    //donde se muestran los resultados
    if(page===1){
        resultadoBusqueda.innerHTML = "";
    }

    const resultados = data.results;
    //Por cada resultado armo un enlace a, con la imagen dentro
    resultados.map((result) => {
        const imagen = document.createElement("img");
        imagen.src = result.urls.small;
        const imagenLink = document.createElement("a");
        imagenLink.href = result.links.html;
        imagenLink.target = "_blank";

        imagenLink.appendChild(imagen);

        //agrego el elemento al contendor
        resultadoBusqueda.appendChild(imagenLink);
    });

    //muestro el botón mostrar mas
    mostrarMas.style.display = "block";


}

//Agrego funcionalidad para cuando
formBusqueda.addEventListener("submit", (e)=>{
    //Evito que se regarge la pàgina
    e.preventDefault();
    page = 1;
    buscarImagenes();
})

//Funcionalidad al boton Mostrar mas.
mostrarMas.addEventListener("click", () =>{
    page++;
    buscarImagenes();
})