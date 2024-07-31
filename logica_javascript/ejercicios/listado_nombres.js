// Lista de nombres fija
let listadoNombres = ["Andrea","Gabriel","Adriana","Cristofer","Edgar", "Irene", "Daysi"];

// Usuario puede ingresar un nombre por teclado.
let nombreBuscar = prompt("Ingresé el nombre a buscar: ");

/* Función buscarNombre */
function buscarNombre(listaNombre, nombreBuscar){
    return listaNombre.includes(nombreBuscar);
}

// Busqueda si está o no el nombre en el listado
let estaEnListado = buscarNombre(listadoNombres, nombreBuscar);

// Informar por pantalla
function informarPorPantalla(){
    if(estaEnListado == true){
        console.log(`El nombre ${nombreBuscar} si está en la lista`);
    }
    else if(estaEnListado == ''){
        console.log('No a Ingresado ningun nombre');
    }
    else{
        console.log(`El nombre ${nombreBuscar} no está en la lista`);
    }
}

informarPorPantalla();
