const dias = document.getElementById("days");
const horas = document.getElementById("hours");
const minutos = document.getElementById("min");
const segundos = document.getElementById("sec");

const navidad = new Date("December 25, 2023 00:00:00");

setInterval(() => {
  /* obteniedo la fecha actual */
  let hoy = new Date().getTime();

  /* opteniendo el tiempo que falta para navidad */
  let tiempoRespuesta = navidad - hoy;

  /* conversión de milisegundos a dias, horas, minutos y segundos */
  let days = Math.floor(tiempoRespuesta / (1000 * 60 * 60 * 24));
  let hours = Math.floor(tiempoRespuesta / (1000 * 60 * 60)) % 24;
  let minutes = Math.floor(tiempoRespuesta / (1000 * 60)) % 60;
  let seconds = Math.floor(tiempoRespuesta / 1000) % 60;

  /* Mostrar en pantalla los resultados */
  dias.innerHTML = days;
  horas.innerHTML = hours;
  minutos.innerHTML = minutes;
  segundos.innerHTML = seconds;

}, 1000);
