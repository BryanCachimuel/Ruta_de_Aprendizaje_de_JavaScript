//arreglo que contiene el orden correcto de las palabras
let orden_correcto = ['pasear', 'oveja', 'río', 'agua', 'vecina', 'agradeció', 'pastando'];

//Palabras desordenadas para mostrar en opciones
let palabras_juego = ['agua', 'vecina', 'pasear', 'pastando', 'oveja', 'agradeció', 'río'];

//contenedr de las opciones
let contenedorOpciones = document.getElementById("opciones");
let comprobar = document.getElementById("comprobar");
let txtResultado = document.getElementById("resultado");

//Arreglo que contiene el orden de las palabras que el usuario va eligiendo. Tambien me sirve para saber las posiciones disponibles
let posDisponible = ["", "", "", "", "", "", ""];

//Función que agrega las opciones 
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

//agrego el método remove onclick a cada elemento span del texto
function agregarEliminarAspan(){
    var spans = document.getElementsByTagName("span");
    for(let i=0; i < spans.length; i++){
        spans[i].setAttribute("onclick", "remove(this)");
    }
}
agregarEliminarAspan();

