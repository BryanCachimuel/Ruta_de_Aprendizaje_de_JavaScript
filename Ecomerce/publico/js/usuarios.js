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