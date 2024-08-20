const tituloCancion = document.querySelector('.titulo');
const nombreArtista = document.querySelector('.nombre');

const progreso = document.getElementById('progreso');
const cancion = document.getElementById('cancion');

const iconoControl = document.getElementById('iconoControl');
const botonReproducirPausar = document.querySelector('.controles buton-reproducir-pausar');

const botonAtras = document.querySelector('.controles button.atras');
const botonAdelante = document.querySelector('.controles button.adelante');

const canciones = [
   {
    titulo:'A Year Ago',
    nombre:'NETFEX', 
    fuente:'music/A year Ago - NEFFEX.MPS'
   },
   {
    titulo:'A Year Ago',
    nombre:'NETFEX', 
    fuente:'music/As You Fade Away NETFFE.MP3'
   }
];

let indiceCancionActual = 1;

function actualizarInformacion(){
    tituloCancion.textContent = canciones[indiceCancionActual].titulo;
    nombreArtista.textContent = canciones[indiceCancionActual].nombre;
    cancion.src = canciones[indiceCancionActual].fuente;
    cancion = addEventListener('loadeddata', function(){});
}

function reproducirPausar(){
    reproducirCancion();
    if(cancion.paused){
        reproducirCancion();
        iconoControl.classList.add('bi-pause-fill');
        iconoControl.classList.remove('bi-play-fill');
    }else{
        pausarCancion();
        iconoControl.classList.add('bi-pause-fill');
        iconoControl.classList.remove('bi-play-fill');
    }
}

function reproducirCancion(){
    cancion.play();

}

function pausarCancion(){
    cancion.pause();
}

actualizarInfoCancion();