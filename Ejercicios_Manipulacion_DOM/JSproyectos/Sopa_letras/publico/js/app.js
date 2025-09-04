/*Variables */
let palabras = ["tortuga", "gato", "perro", "abeja", "perico", "tigre", "venado", "zorrillo", "ballena", "pantera", "oveja", "cocodrilo", "caballo", "dinosaurio", "escarabajo", "rinoceronte", "leopardo", "jirafa", "elefante", "hipopotamo", "unicornio", "serpiente", "gacela", "mapache", "chimpance", "gorila", "burro", "zebra", "leon", "hormiga", "manati", "orangutan", "mosquito", "gallina", "conejo", "koala", "tecolote"];
let game = { c: 15, r: 15, letras: [], numPalabras: 25, palabras: [], seleccionadas: [] };
let b, a;

window.onload = function () {
    crearTablero();
    anexarPalabras();
    completarTablero();
    listarPalabras();
    encabezado();
}

/* funciones */
function crearTablero() {
    var i = 0;
    for (var r = 0; r < game.r; r++) {
        for (var c = 0; c < game.c; c++) {
            b = document.createElement("div");
            b.innerText = "*";
            a = document.createAttribute("id");
            a.value = "celda-" + c + "-" + r;
            b.setAttributeNode(a);
            //
            a = document.createAttribute("class");
            a.value = "celda";
            b.setAttributeNode(a);
            //
            b.addEventListener("click", (e) => {
                var id = e.target.id;
                console.log(id);
            }, false);
            //
            document.getElementById("tablero").appendChild(b);
            //
            game.letras.push({ r: r, c: c, i: i, letra: "*" });
            //
            i++;
        }
    }
}

function anexarPalabras() {
    palabras = palabras.sort(() => Math.random() - 0.5);
    for (let i = 0; i < game.numPalabras; i++) {
        ok = anadirPalabra(palabras[i].toUpperCase());
        if(ok) {
            game.palabras.push({
                palabra: palabras[i].toUpperCase();
                posicion: ok,
                encontrada: false
            });
        }
    }
}

function completarTablero() {

}

function listarPalabras() {

}

function encabezado() {

}