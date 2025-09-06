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
        if (ok) {
            game.palabras.push({
                palabra: palabras[i].toUpperCase(),
                posicion: ok,
                encontrada: false
            });
        }
    }
    console.log(game.palabras)
}

function anadirPalabra(palabra) {
    let palabra_array = palabra.split("");
    palabra_array = (Math.random() > 0.5) ? palabra_array : palabra_array.reverse();
    
    let ok = false;
    let tope = 300;

    while(!ok && tope > 0) {
        tope--;
        let pos = { col: 0, row: 0 };
        let dir = (Math.random() > 0.5) ? true : false;
        if(dir && palabra_array.length <= game.c) {
            // palabras en horizontal
            pos.col = coordenada(palabra_array.length, game.c);
            pos.row = Math.floor(Math.random() * game.r);
            ok = verificarPalabraX(pos, palabra_array);
        }else if(!dir && palabra_array.length <= game.r){
            // palabras en vertical
            pos.row = coordenada(palabra_array.length, game.r);
            pos.col = Math.floor(Math.random() * game.c);
            ok = verificarPalabraY(pos, palabra_array);
        }
    }  
    return ok;  
}

function verificarPalabraX(pos, palabra) {
    let inicio = (pos.row * game.c) + pos.col;
    let contador = 0;
    let posicion = [];
    // realizar la busqueda
    for (let i = 0; i < palabra.length; i++) {
        if (game.letras[inicio + i].letra == "*") {
            contador++;
        }
    }
    if (contador == palabra.length) {
        for (let i = 0; i < palabra.length; i++) {
            if (game.letras[inicio + i].letra == "*") {
               game.letras[inicio+i].letra = palabra[i];
               let id = "celda-"+game.letras[inicio+i].c+"-"+game.letras[inicio+i].r;
               document.getElementById(id).innerText = palabra[i];
               posicion.push(inicio+i);
            }
        }
        return posicion;
    }
    return false;
}

function coordenada(lon, c) {
    return Math.floor(Math.random() * (c - lon + 1));
}

function completarTablero() {

}

function listarPalabras() {

}

function encabezado() {

}