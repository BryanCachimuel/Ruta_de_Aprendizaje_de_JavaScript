let banderas = ["pa.svg", "bo.svg", "ad.svg", "gb.svg", "na.svg"];
let correcta = [2, 2, 1, 1, 0];
let opciones = [];

//cargo en el arreglo opciones las opciones a mostrar en cada jugada
opciones.push(["SUDAFRICA", "SINGAPUR", "PANAMA"]);
opciones.push(["PERU", "ITALIA", "BOLIVIA"]);
opciones.push(["TUNEZ", "ANDORRA", "ANTIGUA Y BARBUDA"]);
opciones.push(["UCRANIA", "REINO UNIDO", "MADAGASCAR"]);
opciones.push(["NAMIBIA", "OMAN", "ETIOPIA"]);

//variable que guarda la posicion actual
let posActual = 0;

//variable que guarda la cantidad acertadas hasta el moemento
let cantidadAcertadas = 0;

// función para dar inicio al juego
function comenzarJuego() {
  //reseteamos las variables
  posActual = 0;
  cantidadAcertadas = 0;
  //activamos las pantallas necesarias
  document.getElementById("pantalla-inicial").style.display = "none";
  document.getElementById("pantalla-juego").style.display = "block";
  cargarBandera();
}

//funcion que carga la siguiente bandera y sus opciones
function cargarBandera() {
  if (banderas.length <= posActual) {
    terminarJuego();
  } else {
    limpiarOpciones();

    document.getElementById("imgBandera").src = "../img/" + banderas[posActual];
    document.getElementById("n0").innerHTML = opciones[posActual][0];
    document.getElementById("n1").innerHTML = opciones[posActual][1];
    document.getElementById("n2").innerHTML = opciones[posActual][2];
  }
}

function limpiarOpciones() {
  document.getElementById("n0").className = "nombre";
  document.getElementById("n1").className = "nombre";
  document.getElementById("n2").className = "nombre";

  document.getElementById("l0").className = "letra";
  document.getElementById("l1").className = "letra";
  document.getElementById("l2").className = "letra";
}

function comprobarRespuesta(opElegida) {
  if (opElegida == correcta[posActual]) {
    //acertó
    document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
    document.getElementById("l" + opElegida).className = "letra letraAcertada";
    cantidadAcertadas++;
  } else {
    document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
    document.getElementById("l" + opElegida).className = "letra letraNoAcertada";
    //opcion que era correcta
    document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
    document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
  }
  posActual++;

  setTimeout(cargarBandera, 1000);
}

function terminarJuego(){ 
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    //agreamos los resultados
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = banderas.length - cantidadAcertadas;
}

function volverAlInicio(){
    //ocultamos las pantallas y activamos la inicial
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}
