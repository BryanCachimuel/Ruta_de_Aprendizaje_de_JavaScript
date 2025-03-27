/*
    Practica 1: Descuentos de un restaurante

    Enunciado: un restaurante ofrece un descuento del 10% para consumo de hasta $100.00 y un descuento del 20 % para consumos mayores, 
    para ambos casos se aplica un impuesto del 19%. Determinar el monto del descuento, el impuesto y el valor total a pagar.

    Análisis: para la solución de este problema, se requiere que el usuario ingrese el consumo y el sistema verifica y calcula el monto del descuento,
    el impuesto y el importe a pagar.

    monto del descuento

    impuesto

    importe a pagar 
*/

let valorConsumo = 200;
let descuento = 0.1;
let descuento2 = 0.2;
let descuento3 = 0.3;
let impuesto = 0.19;
let ValorTotalSinDescuento = 0;
let valorTotal = 0;
let valorDescuento;


if(valorConsumo >= 200){
    impuesto = valorConsumo * impuesto
    ValorTotalSinDescuento = valorConsumo + impuesto;
    valorDescuento = ((valorConsumo + impuesto)*descuento3).toFixed(2)
    valorTotal = ValorTotalSinDescuento - valorDescuento;
    console.log(`Valores Obtenidos
    ValorConsumo: ${valorConsumo}
    Impuesto: ${impuesto}
    ValorTotalSinDescuento = ${ValorTotalSinDescuento}
    Monto del Descuento: ${valorDescuento}
    Valor Total: ${valorTotal}`);
}
else if(valorConsumo >= 100){
    impuesto = valorConsumo * impuesto
    ValorTotalSinDescuento = valorConsumo + impuesto;
    valorDescuento = ((valorConsumo + impuesto)*descuento2).toFixed(2)
    valorTotal = ValorTotalSinDescuento - valorDescuento;
    console.log(`Valores Obtenidos
    ValorConsumo: ${valorConsumo}
    Impuesto: ${impuesto}
    ValorTotalSinDescuento = ${ValorTotalSinDescuento}
    Monto del Descuento: ${valorDescuento}
    Valor Total: ${valorTotal}`);
}
else if(valorConsumo === 100){
    impuesto = valorConsumo * impuesto
    ValorTotalSinDescuento = valorConsumo + impuesto;
    valorDescuento = ((valorConsumo + impuesto)*descuento).toFixed(2)
    valorTotal = ValorTotalSinDescuento - valorDescuento;
    console.log(`Valores Obtenidos
    ValorConsumo: ${valorConsumo}
    Impuesto: ${impuesto}
    ValorTotalSinDescuento = ${ValorTotalSinDescuento}
    Monto del Descuento: ${valorDescuento}
    Valor Total: ${valorTotal}`);
}
else{
    impuesto = valorConsumo * impuesto
    valorTotal = valorConsumo + impuesto
    console.log(`Valores a Pagar
    ValorConsumo: ${valorConsumo}
    Impuesto: ${impuesto}
    Valor Total: ${valorTotal}`);
}

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

