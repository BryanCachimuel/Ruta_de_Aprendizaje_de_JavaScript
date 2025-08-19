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