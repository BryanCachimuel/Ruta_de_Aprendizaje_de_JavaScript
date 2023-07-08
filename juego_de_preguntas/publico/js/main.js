//base de datos local de preguntas
const bd_juego = [
    {
        id:0,
        pregunta:"¿Cuál es el país más pequeño del mundo?",
        op0:"Estado Vaticano",
        op1:"Mónaco",
        op2:"San Marino",
        correcta:"0"
    },
    {
        id:1,
        pregunta:"¿Cuántos océanos hay en la Tierra?",
        op0:"Seis",
        op1:"Cinco",
        op2:"Cuatro",
        correcta:"1"
    },
    {
        id:2,
        pregunta:"¿Qué país tiene más habitantes?",
        op0:"China",
        op1:"Estados Unidos",
        op2:"Rusia",
        correcta:"0"
    },
    {
        id:3,
        pregunta:"¿Qué país es el más grande del mundo?",
        op0:"Rusia",
        op1:"Estados Unidos",
        op2:"India",
        correcta:"0"
    },
    {
        id:4,
        pregunta:"¿Cuál es la montaña más alta del mundo?",
        op0:"Acongagua",
        op1:"Tabor",
        op2:"Everest",
        correcta:"2"
    },
    {
        id:5,
        pregunta:"¿Cuál es el río más largo del mundo?",
        op0:"Nilo",
        op1:"Amazonas",
        op2:"Eufrates",
        correcta:"0"
    },
    {
        id:6,
        pregunta:"¿Cuál es la capital de la India?",
        op0:"Chennai",
        op1:"Bombay",
        op2:"Nueva Delhi",
        correcta:"2"
    },
    {
        id:7,
        pregunta:"¿Qué continente se encuentra en los 4 hemisferios?",
        op0:"Africa",
        op1:"Europa",
        op2:"Ninguno",
        correcta:"0"
    },
    {
        id:8,
        pregunta:"¿Cuál es la capital de Egipto?",
        op0:"Alejandría",
        op1:"El Cairo",
        op2:"Menfis",
        correcta:"1"
    },
    {
        id:9,
        pregunta:"¿Dónde se encuentra el estrecho de Magallanes?",
        op0:"Parte sur de america del Norte",
        op1:"En Europa",
        op2:"Parte su de Sudamérica",
        correcta:"2"
    }
]

//para guardar las respuestas elegidas
let respuestas = [];
//cantidad correctas
let cantiCorrectas = 0;
//pregunta acutal que debe ser cargada
let numPregunta = 0;

//Cargo una pregunta del JSON
function cargarPreguntas(){
    //tomo la pregunta actual de la bd
    const pregunta = bd_juego[numPregunta];

    const contenedor = document.createElement("div");
    contenedor.className = "contenedor-pregunta";
    contenedor.id = pregunta.id;
    const h2 = document.createElement("h2");
    h2.textContent = pregunta.id + 1 + " - " + pregunta.pregunta;
    contenedor.appendChild(h2);
    const opciones = document.createElement("div");

    const label1 = crearLabel("0",pregunta.op0);
    const label2 = crearLabel("1",pregunta.op1);
    const label3 = crearLabel("2",pregunta.op2);

    //agrego los labels al contendor de las opciones
    opciones.appendChild(label1);
    opciones.appendChild(label2);
    opciones.appendChild(label3);

    //agrego las opciones al contenedor principal
    contenedor.appendChild(opciones);
    document.getElementById("juego").appendChild(contenedor);
}