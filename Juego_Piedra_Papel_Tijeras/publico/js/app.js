const seccionBatalla = document.getElementById("campo-batalla");
const msjBatalla = document.getElementById("msj-batalla");
const imgAtaqueJugador = document.getElementById("img-ataque-jugador");
const imgAtaquePC = document.getElementById("img-ataque-pc");
const btnPiedra = document.getElementById("btn-piedra");
const btnPapel = document.getElementById("btn-papel");
const btnTijeras = document.getElementById("btn-tijeras");

let opcionJugador;
let opcionPc;
let imgJugador;
let imgPc;

const imagenes = [
    {
        name: "Piedra",
        url: "./img/Piedra.png"
    },
    {
        name: "Papel",
        url: "./img/Papel.png"
    },
    {
        name: "Tijeras",
        url: "./img/Tijeras.png"
    }
];

function iniciaer(){
    seccionBatalla.style.display = 'none';
}