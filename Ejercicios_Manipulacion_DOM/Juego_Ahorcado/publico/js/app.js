// variables
let palabras = ["gato", "perro", "abeja", "perico", "tigre", "venado", "zorrillo", "ballena", "pantera", "oveja", "cocodrilo", "caballo", "dinosaurio", "escarabajo", "rinoceronte", "leopardo", "jirafa", "elefante", "hipopotamo", "unicornio", "serpiente", "gacela", "mapache", "chimpance", "gorila"];

let juego = {
    letras: 26,
    p: "",
    buenas: 0,
    malas: 0,
    limite: 5,
    w: 1,
    id: ""
};

// inicio
window.onload = function() {
    juego.p = palabras[Math.floor(Math.random()*palabras.length)].toUpperCase();
    generarLetras();
    generarPalabra(juego.p);
}

// funciones
function generarLetras() {
    let b,a;
    for(let i = 65; i < juego.letras+65; i++) {
        b = document.createElement("button");
        b.innerText = String.fromCharCode(i);
        a = document.createAttribute("id");
        a.value = "b"+i;
        b.setAttributeNode(a);
        b.addEventListener("click", letra, false);
        document.getElementById("letras").appendChild(b);
    }
}

function generarPalabra(palabra) {
    let b, a;
    for (let i = 0; i < palabra.length; i++) {
        b = document.createElement("input");
        a = document.createAttribute("disabled");
        a.value = "disabled";
        b.setAttributeNode(a);
        document.getElementById("palabra").appendChild(b);
    }
}

function letra(e) {

}