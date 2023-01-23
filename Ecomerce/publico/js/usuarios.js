/* funciones para almacenar y traer los datos que se almacenan */
function guardarAlmacenamientoLocal(llave, valor_a_guardar){
    localStorage.setItem(llave, JSON.stringify(valor_a_guardar))
}

function obtenerAlmacenamientoLocal(llave){
    const datos = JSON.parse(localStorage.getItem(llave))
    return datos
}

let productos = obtenerAlmacenamientoLocal('productos') || [];

/* constantes las cuales se obtienes de las diferentes propiedades creadas en el html */
const informacionCompra = document.getElementById('informacionCompra');
const contenedorCompra = document.getElementById('contenedorCompra');
const productosCompra = document.getElementById('productosCompra');
const contenedor = document.getElementById('contenedor');
const carrito = document.getElementById('carrito');
const numero = document.getElementById('numero');
const header = document.querySelector('#header');
const total = document.getElementById('total');
const body = document.querySelector('body');
const x = document.getElementById('x');

/* variables que se van a utilizar en el proyecto */
let lista = []
let valorTotal = 0

/* scroll para la página web */
window.addEventListener("scroll", function(){
    if(contenedor.getBoundingClientRect().top < 10){
        header.classList.add("scroll")
    }else{
        header.classList.remove("scroll")
    }
})

window.addEventListener("load", () => {
    visualizarProductos();
    contenedorCompra.classList.add("none")
})

function visualizarProductos(){
    contenedor.innerHTML = ""
    for(let i = 0; i < productos.length; i++){
        if(productos[i].existencia > 0){
            contenedor.innerHTML += `<div>
                                        <img src="${productos[i].urlImagen}">
                                        <div class="informacion">
                                            <p>${productos[i].nombre}</p>
                                            <p class="precio">$${productos[i].valor}</p>
                                            <button onclick=comprar(${i})>Comprar</button>
                                        </div>
                                    </div>`
        }else{
            contenedor.innerHTML += `<div>
                                        <img src="${productos[i].urlImagen}">
                                        <div class="informacion">
                                            <p>${productos[i].nombre}</p>
                                            <p class="precio">$${productos[i].valor}</p>
                                            <p class="soldOut">Sold Out</p>
                                        </div>
                                     </div>`
        }
    }
}
