let acordeon_array = new Array();

window.onload = function() {
    acordeon_array = document.getElementsByClassName("acordeon");

    // recorrer el arreglo
    for (let i = 0; i < acordeon_array.length; i++) {
        acordeon_array[i].addEventListener("click",selecciona,false);
    }
}

function selecciona() {
    this.classList.toggle("activo");
    let panel = this.nextElementSibling;
    if(panel.style.display === "block") {
        panel.style.display = "none";
    }else {
        panel.style.display = "block";
    }
}