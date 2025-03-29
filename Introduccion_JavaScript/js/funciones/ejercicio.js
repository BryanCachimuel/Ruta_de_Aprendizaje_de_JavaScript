/*
    Practica 01: Palíndromo

    Crear un sistema que detecte si una palabra es palíndroma o no

    Para solucionar este problema el usuario tiene que ingresar por 
    pantalla una palabra y el sistema verificas si es palíndromo o no.

    Una palabra palíndroma se lee de igual formo como de la derecha y de la izquierda.
*/

//let palabra = prompt('Ingrese una palabra para analizar');

let palabra = 'sacar';

function verificarPalabra(palabraAnalizar){
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


/*
    Practica 02: Primalidad

    Crear un sistema que detecte si un numero es primo o no

    Para solucionar este problema se requiere que el usuario ingres un numero por teclado
    y el sistema detecte si es primo o no.

    Un numero primo es aquel que se puede dividir solo dos veces por 1 y por sí misma.
*/
