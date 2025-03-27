/*
    Practica 01: Descuentos de un restaurante

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

