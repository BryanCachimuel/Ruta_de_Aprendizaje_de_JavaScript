/*
    Practica 01: Palíndromo

    Crear un sistema que detecte si una palabra es palíndroma o no

    Para solucionar este problema el usuario tiene que ingresar por 
    pantalla una palabra y el sistema verificas si es palíndromo o no.

    Una palabra palíndroma se lee de igual formo como de la derecha y de la izquierda.
*/

//let palabra = prompt('Ingrese una palabra para analizar');

let palabra = 'oso';

function verificarPalabra(palabraAnalizar){
    palabraAnalizar = palabraAnalizar.replace(' ','');
    palabraAnalizar = palabraAnalizar.toLowerCase();

    let analisis = palabraAnalizar.split('');
    let revertir = analisis.reverse();
    let palabraJuntada = revertir.join('')
    
    if(palabraJuntada == palabraAnalizar){
        return `${palabraJuntada} es un palindromo`
    }else{
        return `${palabraJuntada} no es un palindromo`
    }
}

let resultado = verificarPalabra(palabra)

console.log(resultado)
