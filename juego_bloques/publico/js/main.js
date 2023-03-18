const contenedor = document.querySelector('.contenedor')
//Definicion de medidas
const altoTablero = 300
const anchoTablero = 570
const altoBloque = 20
const anchoBloque = 100

//definir posicion Usuario
const posicionInicialUsuario = [230,10]
let posicionActualUsuario = posicionInicialUsuario
//Definir posicion de la bola
const posicionInicialBola = [270,40]
let posicionActualBola = posicionInicialBola
//definicion particularidad de la bola
let xDireccionBola = 2
let yDireccionBola = 2
let diametro = 20