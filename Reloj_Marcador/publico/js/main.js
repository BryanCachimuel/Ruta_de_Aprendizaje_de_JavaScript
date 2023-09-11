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

function clock(){
    let dt = new Date();
    hr = dt.getHours();
    mn = dt.getMinutes();
    sc = dt.getSeconds();
    //console.log(hr, mn, sc)

    indicador(hr, mn, sc);

    hr < 10 ? (hr = "0" + hr) : hr;
    mn < 10 ? (mn = "0" + mn) : mn;
    sc < 10 ? (sc = "0" + sc) : sc;

    horas.innerHTML = hr;
    minutos.innerHTML = mn;
    segundos.innerHTML = sc
}