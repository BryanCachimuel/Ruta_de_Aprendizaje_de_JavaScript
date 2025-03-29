/*
    Practica 02: Primalidad

    Crear un sistema que detecte si un numero es primo o no

    Para solucionar este problema se requiere que el usuario ingrese un número por teclado
    y el sistema detecte si es primo o no.

    Un numero primo es aquel que se puede dividir solo dos veces por 1 y por sí misma.
*/

let numero = 5;

const validarPrimalidad = (valor) => {
   let contador = 0;
   let numeros = [];

   for(let i = 0; i < valor; i++){
        numeros.push(i+1);
   }  
   
   for(let n of numeros){
    if(n === 1 || n === valor){
        continue;
    }
    if(valor % n === 0){
        contador++;
    }
   }
   return contador === 0;
}

console.log(validarPrimalidad(numero))
