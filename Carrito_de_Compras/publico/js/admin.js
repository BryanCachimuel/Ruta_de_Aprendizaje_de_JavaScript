function guardarAlmacenamientoLocal(llave, valor_guardar){
    localStorage.setItem(llave, JSON.stringify(valor_guardar))
}

/* función para recuperar los datos que hemos almacenado */
function obtenerAlmacenamientoLocal(llave){
    const datos = JSON.parse(localStorage.getItem(llave))
    return datos
}

let productos = obtenerAlmacenamientoLocal('productos') || [];

/* Añadir un producto */
const añadirProducto = document.getElementById('productoAñadir')
const añadirValor = document.getElementById('valorAñadir')
const añadirExistencia = document.getElementById('existenciaAñadir')
const añadirImagen = document.getElementById('ImagenAñadir')
