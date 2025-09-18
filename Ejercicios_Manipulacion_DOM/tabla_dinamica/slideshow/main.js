let index = 1;

window.onload = function() {
    muestraFoto(index);
}

function mueve(n) {
    muestraFoto(index += n);
}