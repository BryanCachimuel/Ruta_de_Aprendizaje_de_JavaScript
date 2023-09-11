const horas = document.querySelector(".hr");
const minutos = document.querySelector(".mn");
const segundos = document.querySelector(".sc");

const horasIndicador = document.querySelector(".indicadorHR");
const minutosIndicador = document.querySelector(".indicadorMN");
const segundosIndicador = document.querySelector(".indicadorSC");

const horasIndicadorBC = document.querySelector(".bcindicadorHR");
const minutosIndicadorBC = document.querySelector(".bcindicadorMN");
const segundosIndicadorBC = document.querySelector(".bcindicadorSC");

let hr;
let mn;
let sc;

setInterval(clock, 1000);

