const dias = document.getElementById("days");
const horas = document.getElementById("hours");
const minutos = document.getElementById("min");
const segundos = document.getElementById("sec");

const aa = document.getElementById("anio").value;
const mm = document.getElementById("mes").value;
const dd = document.getElementById("dia").value;

//const navidad = new Date("December 25, 2023 00:00:00");
const navidad = new Date(`${mm} ${dd}, ${aa} 00:00:00`);

const calcular = () => {
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
  
    /* mejorar el formato de las fechas */
    if (hours < 10) horas.innerHTML = "0" + hours;
    if (minutes < 10) minutos.innerHTML = "0" + minutes;
    if (seconds < 10) segundos.innerHTML = "0" + seconds;
  }, 1000);
}

const limpiar = () => {
  document.getElementById("anio").value = "";
  document.getElementById("mes").value = "";
  document.getElementById("dia").value = "";
}
