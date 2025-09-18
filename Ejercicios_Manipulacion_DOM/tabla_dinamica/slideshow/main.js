let index = 1;

window.onload = function() {
    muestraFoto(index);
}

function mueve(n) {
    muestraFoto(index += n);
}

function foto(n) {
   muestraFoto(index = n); 
}

function muestraFoto(n) {
    let i;
    let fotos = document.getElementsByClassName("foto");
    let bolitas = document.getElementsByClassName("bolita");
    if(n > fotos.length) index = 1;
    if(n < 1) index = fotos.length;
}