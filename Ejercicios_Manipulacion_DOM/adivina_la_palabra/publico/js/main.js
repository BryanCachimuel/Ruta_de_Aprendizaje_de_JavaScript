//Arreglo que contiene las palabras para jugar
let arrayPalabras = [
  "GUITARRA",
  "ELEFANTE",
  "TURQUESA",
  "MARIELA",
  "TECLADO",
  "INGLATERRA",
];

//Arreglo que contiene las ayudas de cada palabra
let ayudas = [
  "Instrumento Musical",
  "Animal de la selva",
  "Es un color",
  "Nombre de mujer",
  "Hardware de computadora",
  "Es un Pais",
];

let cantPalabrasJugadas = 0;
let intentosRestantes = 5;
let posActual;
let arrayPalabraActual = [];
let cantidadAcertadas = 0;
let divsPalabraActual = [];
let totalQueDebeAcertar;

//Función que carga la  palabra nueva para jugar
function cargarNuevaPalabra() {
  cantPalabrasJugadas++;
  if (cantPalabrasJugadas > 6) {
    arrayPalabras = [
      "GUITARRA",
      "ELEFANTE",
      "TURQUESA",
      "MARIELA",
      "TECLADO",
      "INGLATERRA",
    ];
    ayudas = [
      "Instrumento Musical",
      "Animal de la selva",
      "Es un color",
      "Nombre de mujer",
      "Hardware de computadora",
      "Es un Pais",
    ];
  }

  //Seleccion de una posicion random
  posActual = Math.floor(Math.random() * arrayPalabras.length);

  let palabra = arrayPalabras[posActual];
  totalQueDebeAcertar = palabra.length;
  cantidadAcertadas = 0;
  arrayPalabraActual = palabra.split("");

  document.getElementById("palabra").innerHTML = "";
  document.getElementById("letrasIngresadas").innerHTML = "";

  //Cargamos la cantidad de divs (letras) que tiene la palabra
  for (i = 0; i < palabra.length; i++) {
    var divLetra = document.createElement("div");
    divLetra.className = "letra";
    document.getElementById("palabra").appendChild(divLetra);
  }

  divsPalabraActual = document.getElementsByClassName("letra");

  //se setean la cantidad de intentos
  intentosRestantes = 5;
  document.getElementById("intentos").innerHTML = intentosRestantes;
  document.getElementById("ayuda").innerHTML = ayudas[posActual];

  //se elimina el elemento ya seleccionado del arreglo.
  arrayPalabras.splice(posActual, 1);
  ayudas.splice(posActual, 1);
}

//Llamada para cargar la primera palabra del juego
cargarNuevaPalabra();

//se detecta la tecla que el usuario presiono
document.addEventListener("keydown", (event) => {
  if (isLetter(event.key)) {
    let letrasIngresadas =
      document.getElementById("letrasIngresadas").innerHTML;
    letrasIngresadas = letrasIngresadas.split("");

    if (letrasIngresadas.lastIndexOf(event.key.toUpperCase()) === -1) {
      let acerto = false;
      //Recorro el arreglo que contiene la palabra para verificar si la palabra ingresada si se encuentra
      for (i = 0; i < arrayPalabraActual.length; i++) {
        if (arrayPalabraActual[i] == event.key.toUpperCase()) {
          //acertó
          divsPalabraActual[i].innerHTML = event.key.toUpperCase();
          acerto = true;
          cantidadAcertadas = cantidadAcertadas + 1;
        }
      }
      //se controla si se acerto al menos una letra
      if (acerto == true) {
        if (totalQueDebeAcertar == cantidadAcertadas) {
          for (i = 0; i < arrayPalabraActual.length; i++) {
            divsPalabraActual[i].className = "letra pintar";
          }
        }
      } else {
        //No acerto, decremento los intentos restantes
        intentosRestantes = intentosRestantes - 1;
        document.getElementById("intentos").innerHTML = intentosRestantes;

        //controla si ya acabo todas la oportunidades
        if (intentosRestantes <= 0) {
          for (i = 0; i < arrayPalabraActual.length; i++) {
            divsPalabraActual[i].className = "letra pintarError";
          }
        }
      }
      document.getElementById("letrasIngresadas").innerHTML +=
        event.key.toLocaleUpperCase() + " - ";
    }
  }
});

//Función que determina si un caracter es una letra
function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}
