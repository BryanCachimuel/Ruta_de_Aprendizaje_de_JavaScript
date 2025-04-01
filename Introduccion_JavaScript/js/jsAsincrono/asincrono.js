/* Utilización de setTimeout */
setTimeout(() => {
    console.log('Esto aparece despues de 3 segundos')
}, 3000);

// JavaScript Asíncrono
const segundo = () => {
    setTimeout(() => {
        console.log('Llamada a Segundo')
    }, 2000);
}

const primero = () => {
    console.log('Llamada a Primero')
    segundo()
    console.log('Fin de Primero')
}

primero()