const contenedor = document.querySelector('.contenedor')

const altoTablero = 300
const anchoTablero = 570
const altoBloque = 20
const anchoBloque = 100


const posicionInicialUsuario = [230,10]
let posicionActualUsuario = posicionInicialUsuario

const posicionInicialBola = [270,40]
let posicionActualBola = posicionInicialBola

let xDireccionBola = 2
let yDireccionBola = 2
let diametro = 20

let timerID