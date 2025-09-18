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
    
    for (let i = 0; i < fotos.length; i++) {
       fotos[i].style.display = "none"; 
    }

     for (let i = 0; i < bolitas.length; i++) {
       bolitas[i].className = bolitas[i].className.replace("activo",""); 
    }

    fotos[index-1].style.display = "block";
    bolitas[index-1].className += " activo";
}