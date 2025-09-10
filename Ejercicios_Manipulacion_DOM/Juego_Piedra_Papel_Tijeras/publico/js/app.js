const seccionBatalla = document.getElementById("campo-batalla");
const msjBatalla = document.getElementById("msj-batalla");
const imgAtaqueJugador = document.getElementById("img-ataque-jugador");
const imgAtaquePc = document.getElementById("img-ataque-pc");
const btnPiedra = document.getElementById("btn-piedra");
const btnPapel = document.getElementById("btn-papel");
const btnTijeras = document.getElementById("btn-tijeras");
const seccion = document.getElementById("seccion-imagenes");

let opcionJugador;
let opcionPc;
let imgJugador;
let imgPc;

const imagenes = [
  {
    name: "Piedra",
    url: "./publico/img/Piedra.png",
  },
  {
    name: "Papel",
    url: "./publico/img/Papel.png",
  },
  {
    name: "Tijeras",
    url: "./publico/img/Tijeras.png",
  },
];

function iniciar() {
  seccionBatalla.style.display = "none";
}

btnPiedra.addEventListener("click", function () {
  opcionJugador = "Piedra";
  opPc();
});

btnPapel.addEventListener("click", function () {
  opcionJugador = "Papel";
  opPc();
});

btnTijeras.addEventListener("click", function () {
  opcionJugador = "Tijeras";
  opPc();
});

function opPc() {
  var aleaorio = imagenAleatoria();

  if (aleaorio == 0) {
    opcionPc = "Piedra";
  } else if (aleaorio == 1) {
    opcionPc = "Papel";
  } else if (aleaorio == 2) {
    opcionPc = "Tijeras";
  }

  batalla();
}

function batalla() {
  if (opcionJugador == opcionPc) {
    msjBatalla.innerHTML = "Empataste :|";
  } else if (opcionJugador == "Piedra" && opcionPc == "Tijeras") {
    msjBatalla.innerHTML = "Ganaste :)";
  } else if (opcionJugador == "Papel" && opcionPc == "Piedra") {
    msjBatalla.innerHTML = "Ganaste :)";
  } else if (opcionJugador == "Tijeras" && opcionPc == "Papel") {
    msjBatalla.innerHTML = "Ganaste :)";
  } else {
    msjBatalla.innerHTML = "Perdiste :(";
  }

  agregarImagenes();
}

function imagenAleatoria() {
  let n = Math.floor(Math.random() * 3);
  return n;
}

function agregarImagenes() {
  for (let i = 0; i < imagenes.length; i++) {
    if (opcionJugador == imagenes[i].name) {
      imgJugador = imagenes[i].url;
      var inserta = `<img class="img-batalla" src=${imgJugador} alt="">`;
      imgAtaqueJugador.innerHTML = inserta;
    }

    if (opcionPc == imagenes[i].name) {
      imgPc = imagenes[i].url;
      var inserta = `<img class="img-batalla" src=${imgPc} alt="">`;
      imgAtaquePc.innerHTML = inserta;
    }
  }
  seccionBatalla.style.display = "flex";
}

window.addEventListener("load", iniciar);
