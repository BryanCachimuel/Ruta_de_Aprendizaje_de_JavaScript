//seleccionamos los elementos del DOM
let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let respuesta_usuario = document.querySelector("#respuesta_usuario");
let msj_correccion = document.querySelector("#msj_correccion");
let operacion = document.querySelector("#operacion");
let operacion_actual;
//en n1 y n2 voy a guardar los numeros aletarios de cada operacion
let n1, n2;

//funcion suma
function btnSumar() {
    //limpiamos el div contenedor de las correcciones
    msj_correccion.innerHTML = "";
    //agregamos la clase activa al boton suma y la quitamos del resto
    activarBoton("suma");
    operacion_actual = "+";
    //asignamos la operacion suma a la etiqueta
    operacion.innerHTML = " + ";
    //generamos los numeros aletarios de la suma
    nuevaSuma();
}

function nuevaSuma() {
    //generamos dos numeros aletarios entre 0 y 9
    n1 = parseInt(Math.random() * 10);
    n2 = parseInt(Math.random() * 10);
    //asignamos los numeros a las etiquetas
    num1.innerHTML = n1;
    num2.innerHTML = n2;
    //colocamos el curso en el input
    respuesta_usuario.focus();
}