//Arreglo que contiene las palabras para jugar
let arrayPalabras =["GUITARRA", "ELEFANTE", "TURQUESA", "MARIELA", "TECLADO", "INGLATERRA"];

//Arreglo que contiene las ayudas de cada palabra
let ayudas = [
    "Instrumento Musical",
    "Animal de la selva",
    "Es un color",
    "Nombre de mujer",
    "Hardware de computadora",
    "Es un Pais"
];

let cantPalabrasJugadas = 0;
let intentosRestantes = 5;
let posActual;
let arrayPalabraActual = [];
let cantidadAcertadas = 0;
let divsPalabraActual = [];
let totalQueDebeAcertar;

//Funcion que carga la  palabra nueva para jugar
function cargarNuevaPalabra(){
    cantPalabrasJugadas++;
    if(cantPalabrasJugadas>6){
        arrayPalabras =["GUITARRA", "ELEFANTE", "TURQUESA", "MARIELA", "TECLADO", "INGLATERRA"];
        ayudas = [
            "Instrumento Musical",
            "Animal de la selva",
            "Es un color",
            "Nombre de mujer",
            "Hardware de computadora",
            "Es un Pais"
        ]
    }

    //Selecciono una posicion random
    posActual = Math.floor(Math.random()*arrayPalabras.length);

    let palabra = arrayPalabras[posActual];

    totalQueDebeAcertar = palabra.length;

    cantidadAcertadas = 0;

    arrayPalabraActual = palabra.split('');

    document.getElementById("palabra").innerHTML = "";
    document.getElementById("letrasIngresadas").innerHTML = "";

    //Cargamos la cantidad de divs (letras) que tiene la palabra
    for(i=0;i<palabra.length;i++){
        var divLetra = document.createElement("div");
        divLetra.className = "letra";
        document.getElementById("palabra").appendChild(divLetra);
    }

    divsPalabraActual = document.getElementsByClassName("letra");

    //setemos los intentos
    intentosRestantes = 5;
    document.getElementById("intentos").innerHTML = intentosRestantes;
    document.getElementById("ayuda").innerHTML = ayudas[posActual];

   //elimino el elemento ya seleccionado del arreglo.
    //splice(posActual,1): A partir de la posicon posActual elimino 1 elemento
    arrayPalabras.splice(posActual,1);
    ayudas.splice(posActual,1);

}

//Llamada para cargar la primera palabra del juego
cargarNuevaPalabra();

//Detecto la tecla que el usuario presion
document.addEventListener("keydown", event => {

    if(isLetter(event.key)){
        let letrasIngresadas = document.getElementById("letrasIngresadas").innerHTML;
        letrasIngresadas = letrasIngresadas.split('');
        
        //controlo si la letra presionada ya ha sido ingresada
        if(letrasIngresadas.lastIndexOf(event.key.toUpperCase()) === -1){

            let acerto = false;
            //Recorro el arreglo que ocntiene la palabra para verificar si la palabra ingresada esta
            for(i=0;i<arrayPalabraActual.length;i++){
                if(arrayPalabraActual[i] == event.key.toUpperCase()){//acertó
                    divsPalabraActual[i].innerHTML = event.key.toUpperCase();
                    acerto = true;
                    cantidadAcertadas = cantidadAcertadas + 1;
                }
            }
        
            //Controlo si acerto al menos una letra
            if(acerto==true){
                if(totalQueDebeAcertar == cantidadAcertadas){
                    for(i=0;i<arrayPalabraActual.length;i++){
                        divsPalabraActual[i].className="letra pintar";
                    }
                }
            }else{
                //No acerto, decremento los intentos restantes
                intentosRestantes = intentosRestantes - 1;
                document.getElementById("intentos").innerHTML = intentosRestantes;

                //controlamos si ya acabo todas la oportunidades
                if(intentosRestantes<=0){
                    for(i=0;i<arrayPalabraActual.length;i++){
                        divsPalabraActual[i].className="letra pintarError";
                    }
                }
            }
            document.getElementById("letrasIngresadas").innerHTML += event.key.toLocaleUpperCase() + " - ";
        }
    }
});
