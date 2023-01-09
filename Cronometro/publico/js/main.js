/* creando las variables para controlar los elementos del html */
const cronometro_pantalla = document.getElementById('cronometro')
const cronometro_opciones = document.getElementById('cronometro-opciones')
const cronometro_border = document.getElementById('cronometro-border')
const cronometro_score = document.getElementById('cronometro-score')

let min = 0
let cseg = 0
let seg = 0
let contador = null
let cantPoints = 0

const conseguirContador = () => {
    return setInterval(function(){
        cseg++
        if(min >= 60 && seg >= 60 && cseg >= 100){
            clearInterval(contador)
        }else if(cseg === 100){
            seg++
            cseg = 0
            if(seg === 60){
                min++
                seg = 0
                cronometro_pantalla.children[0].innerHTML = min
                cronometro_pantalla.children[2].innerHTML = 0
            }else{
                cronometro_pantalla.children[2].innerHTML = seg
            }
        }
        cronometro_pantalla.children[3].innerHTML = cseg
    },10)
}

const iniciarCronometro = () => {
    contador = conseguirContador()
    cronometro_opciones.children[1].innerHTML = '⏸'
    cronometro_border.classList.add('rotar')
}

const pararCronometro = () => {
    clearInterval(contador)
    contador = null
    cronometro_opciones.children[1].innerHTML = '▶'
    cronometro_border.classList.remove('rotar')
}

const resetearCronometro = () => {
    pararCronometro()
    min = 0
    cseg = 0
    seg = 0
    cantPoints = 0
    cronometro_pantalla.children[0].innerHTML = 0
    cronometro_pantalla.children[2].innerHTML = 0
    cronometro_pantalla.children[3].innerHTML = 0
    cronometro_score.innerHTML = ''
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