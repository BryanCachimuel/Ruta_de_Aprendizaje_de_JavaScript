let botonElem = document.getElementById('boton-cambiar-cita');
let citaElem = document.getElementById('cita');
let autorElem = document.getElementById('autor');

function generarEnteroAleatorio(min, max){
    // Sin incluir max en los valores posibles
    return Math.floor(Math.random() * (max - min) + min);
}

function cambiarCita(){
    let indiceAleatorio = generarEnteroAleatorio(0, citas.length);
    citaElem.innerHTML = `"${citas[indiceAleatorio].texto}"`;
    autorElem.innerHTML = citas[indiceAleatorio].autor;
}


cambiarCita();