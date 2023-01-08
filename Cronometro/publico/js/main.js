/* creando las variables para controlar los elementos del html */
const cronometro_pantalla = document.getElementById('cronometro')
const cronometro_opciones = document.getElementById('cronometro-opciones')
const cronometro_border = document.getElementById('cronometro-border')
const cronometro_score = document.getElementById('cronometro-score')

let cseg = 0
let seg = 0
let contador = null
let cantPoints = 0

const conseguirContador = () => {

}

const iniciarCronometro = () => {

}

const pararCronometro = () => {

}

const resetearCronometro = () => {

}

const aniadirPunto = () => {

}

cronometro_opciones.addEventListener('click', (e) => {
    switch (e.target.id) {
        case 'cronometro-iniciar':
        if(contador === null){
            iniciarCronometro()
        }else{
            pararCronometro()
        }
        break;

        case 'cronometro-reiniciar':
        resetearCronometro()
        break;

        case 'cronometro-anotar':
        aniadirPunto()
        break;
    
        default:
        break;
    }
})