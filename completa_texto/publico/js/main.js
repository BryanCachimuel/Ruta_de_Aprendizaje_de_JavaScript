//arreglo que contiene el orden correcto de las palabras
let orden_correcto = ['pasear', 'oveja', 'río', 'agua', 'vecina', 'agradeción', 'pastando'];

//Palabras desordenadas para mostrar en opciones
let palabras_juego = ['agua', 'vecina', 'pasear', 'pastando', 'oveja', 'agradeción', 'río'];

//contenedr de las opciones
let contenedorOpciones = document.getElementById("opciones");
let comprobar = document.getElementById("comprobar");
let txtResultado = document.getElementById("resultado");

//Arreglo que contiene el orden de las palabras que el usuario va eligiendo. Tambien me sirve para saber las posiciones disponibles
let posDisponible = ["", "", "", "", "", "", ""];

//Agrega las opciones 
function agregarOpciones(){
    palabras_juego.forEach(element => {
        let div = document.createElement("div");
        div.className = "palabra";
        div.innerHTML = element;
        div.setAttribute("onclick", "completar(this)");
        contenedorOpciones.appendChild(div);
    });
}
agregarOpciones();

//Agregar el método remove onclick a cada elemento span del texto
function agregarEliminarAspan(){
    var spans = document.getElementsByTagName("span");
    for(let i=0; i < spans.length; i++){
        spans[i].setAttribute("onclick", "remove(this)");
    }
}
agregarEliminarAspan();

//Coloca el texto de la opcion elegida en el span correspondiente
function completar(palabra){
    let posLibre = posDisponible.indexOf("");
    document.getElementById(posLibre).innerHTML = palabra.innerHTML;
    posDisponible[posLibre] = palabra.innerHTML;
    contenedorOpciones.removeChild(palabra);
}

//Elimina una palabra del texto y la pone de nuevo en opciones
function remove(palabra){
    if(palabra.innerHTML!=""){
        let div = document.createElement("div");
        div.className = "palabra";
        div.innerHTML = palabra.innerHTML;
        div.setAttribute("onclick", "completar(this)");
        contenedorOpciones.appendChild(div);

        palabra.innerHTML = "";
        posDisponible[palabra.id] = "";

        document.getElementById(palabra.id).style.background = "#ccc";

        txtResultado.innerHTML = "";
    }
}

//Comprueba si esta correcto
comprobar.onclick = function(){
    let posLibre = posDisponible.indexOf("");
    let totalAciertos = 0;

    if(posLibre==-1){
        for(i=0; i <orden_correcto.length;i++){
            if(orden_correcto[i]==posDisponible[i]){
                document.getElementById(i).style.background = "#c0ff33";
                totalAciertos++;
            }else{
                document.getElementById(i).style.background = "#fb4b4b";
            }
        }
        if(totalAciertos==orden_correcto.length){
            txtResultado.innerHTML = "Muy bien!!";
        }else{
            txtResultado.innerHTML = "Existen errores!!";
        }
    }else{
        alert("Completa las palabras");
    }
}



