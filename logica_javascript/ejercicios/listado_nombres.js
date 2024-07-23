// Lista de nombres fija
let listadoNombres = ["Andrea","Gabriel","Adriana","Cristofer","Edgar"];

// Usuario puede ingresar un nombre por teclado.
let nombreBuscar = prompt("Ingresé el nombre a buscar: ");

/* Función buscarNombre */
function buscarNombre(listaNombre, nombreBuscar){
    return listaNombre.includes(nombreBuscar);
}

// Busqueda si está o no el nombre en el listado
let estaEnListado = buscarNombre(listadoNombres, nombreBuscar);

// Informar por pantalla
if(estaEnListado == true){
    console.log(`El nombre ${nombreBuscar} nombre está en la lista`);
}
else{
    console.log(`El nombre ${nombreBuscar} no nombre está en la lista`);
}
