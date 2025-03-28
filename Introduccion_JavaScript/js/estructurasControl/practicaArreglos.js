/*
    Practica 2: Guardar resultados de pares e impares

    Crea 3 arrays y un array que tendrá números de 1 a 9. El primera array se llamará pares y el segundo impar, 
    ambos estarán vacíos. Después multiplica cada uno de los números de array con números por un número aleatorio entre 1 y 100, 
    si el resultado es par guarda ese número en el arrya de pares y si es impar en el array  de impares. Muestra por consola:
     -la multiplicación que se produce junto con su resultado con el formato 2 x 3 = 6 y el array de pares e impares 
*/

let numeros = [1,2,3,4,5,6,7,8,9];
let numeroAleatorios = 1;
let valoresMultiplicacion = 0;
let pares = []
let impares = [];


for(let i = 0; i < numeros.length; i++){
    numeroAleatorios = Math.floor(Math.random() * 101);
    valoresMultiplicacion = numeros[i] * numeroAleatorios;
    console.log(`${numeros[i]} x ${numeroAleatorios} = ${numeros[i] * numeroAleatorios}`)
    
    if(valoresMultiplicacion%2 === 0){
        pares.push(valoresMultiplicacion);        
    }else{
        impares.push(valoresMultiplicacion);   
    }
}

console.log('\n')
for(let valoresPares of pares){
    console.log(valoresPares)
}

console.log('\n')

for(let valoresImpares of impares){
    console.log(valoresImpares)
}

