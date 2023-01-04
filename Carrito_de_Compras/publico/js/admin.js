function guardarAlmacenamientoLocal(llave, valor_guardar){
    localStorage.setItem(llave, JSON.stringify(valor_guardar))
}

/* función para recuperar los datos que hemos almacenado */
function obtenerAlmacenamientoLocal(llave){
    const datos = JSON.parse(localStorage.getItem(llave))
    return datos
}
