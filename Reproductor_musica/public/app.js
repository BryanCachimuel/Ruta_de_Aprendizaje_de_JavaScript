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
    }else{
        pausarCancion();
    }
}

function reproducirCancion(){
    cancion.play();
    iconoControl.classList.add('bi-pause-fill');
    iconoControl.classList.remove('bi-play-fill');
}

function pausarCancion(){
    cancion.pause();
    iconoControl.classList.add('bi-pause-fill');
    iconoControl.classList.remove('bi-play-fill');
}

cancion.addEventListener('timeupdate', function(){
    if(!cancion.paused){
        progreso.value = cancion.currentTime;
    }
});

progreso.addEventListener('input', function(){
    cancion.currentTime = progreso.value;
});

progreso.addEventListener('change', function(){
    reproducirCancion();
});

botonAdelante.addEventListener('click',function(){
    indiceCancionActual = (indiceCancionActual + 1) % canciones.length;
    actualizarInfoCancion();
    reproducirCancion();
});

botonAtras.addEventListener('click',function(){
    indiceCancionActual = (indiceCancionActual - 1 + cancion.length) % canciones.length;
    actualizarInfoCancion();
    reproducirCancion();
    console.log(canciones.length)
});

actualizarInfoCancion();