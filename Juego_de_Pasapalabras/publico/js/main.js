//total preguntas del juego
const TOTAL_PREGUNTAS = 10;

//tiempo del juego
const TIEMPO_DEL_JUEGO = 60;

//estructura para almacenar las preguntas
const bd_juego = [
  {
    id: "A",
    pregunta: "Empresa reconocida que se dedica a los servidores",
    respuesta: "amazon",
  },
  {
    id: "B",
    pregunta: "Término en inglesque hace referencia a una copia de seguridad",
    respuesta: "backup",
  },
  {
    id: "C",
    pregunta:
      "Nombre de la memoria que almacena temporalmente los datos de la computadora",
    respuesta: "cache",
  },
  {
    id: "D",
    pregunta:
      "Archivo que controla los periféricos que se conectan a la computadora",
    respuesta: "driver",
  },
  {
    id: "E",
    pregunta:
      "Mezclar los datos para protegerlos como medida de seguridad, es decir, convertir texto normal a texto cifrado",
    respuesta: "encriptar",
  },
  {
    id: "F",
    pregunta: "Famosa red social cread por Mark Zuckerberg",
    respuesta: "facebook",
  },
  {
    id: "G",
    pregunta: "Lenguaje de programación crado por Google",
    respuesta: "go",
  },
  {
    id: "H",
    pregunta: "lenguaje utilizado para la estructura a las páginas web",
    respuesta: "html",
  },
  {
    id: "I",
    pregunta:
      "Aspecto que presentan los programas tras su ejecución mediante el cual ejercemos la comunicación con éstos",
    respuesta: "interfaz",
  },
  {
    id: "J",
    pregunta:
      "Lenguaje de programación con el cual se diseño el sistema operativo Android",
    respuesta: "java",
  },
];

//preguntas que ya han sido contestadas. Si estan en 0 no han sido contestadas
var estadoPreguntas = [0,0,0,0,0,0,0,0,0,0]
var cantidadAcertadas = 0;

//variable que mantiene el número de pregunta actual
var numPreguntaActual = -1;

// Obtener el elemento del cronómetro
const timer = document.getElementById("tiempo");

// Establecer el tiempo inicial en 60 segundos
let timeLeft = TIEMPO_DEL_JUEGO;
var countdown;

//boton comenzar
var comenzar = document.getElementById("comenzar");
comenzar.addEventListener("click", function(event) {
  document.getElementById("pantalla-inicial").style.display = "none";
  document.getElementById("pantalla-juego").style.display = "block";
  largarTiempo();
  cargarPregunta();
});