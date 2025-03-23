const deg = 6;

const hora = document.querySelector('#hr');
const minutos = document.querySelector('#mn');
const segundos = document.querySelector('#sc');

setInterval(() => {
    let dia = new Date();
    let hh = dia.getHours() * 30;
    let mm = dia.getMinutes() * deg;
    let ss = dia.getSeconds() * deg;

    hora.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
    minutos.style.transform = `rotateZ(${mm}deg)`;
    segundos.style.transform = `rotateZ(${ss}deg)`;
});