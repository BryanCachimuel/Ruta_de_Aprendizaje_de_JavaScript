// Lista de nombres fija
let listadoNombres = ["Andrea","Gabriel","Adriana","Cristofer","Edgar"];

// Usuario puede ingresar un nombre por teclado.
let nombreBuscar = prompt("Ingresé eñ nombre a buscar: ");

/* Función buscarNombre */
function buscarNombre(listaNombre, nombreBuscar){
    return listaNombre.includes(nombreBuscar);
}

// Busqueda si está o no el nombre en el listado
let estaEnListado = buscarNombre(listaNombre, nombreBuscar);

// Informar por pantalla
