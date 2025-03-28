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

let valorConsumo = parseFloat(prompt('Ingrese el valor de consumo'));
let descuento = 0.1;
let descuento2 = 0.2;
let descuento3 = 0.3;
let impuesto = 0.19;
let valorTotal = 0;
let valorSubtotal = 0;
let valorDescuento;


if(valorConsumo >= 200){
    valorDescuento = (valorConsumo * descuento3);
    valorSubtotal = valorConsumo - valorDescuento;
    impuesto = (valorSubtotal * impuesto).toFixed(2);
    valorTotal = parseFloat(valorSubtotal) + parseFloat(impuesto);
    console.log(`Valores Obtenidos
    ValorConsumo: ${valorConsumo}
    Descuento: ${descuento3 * 100}%
    Monto con Descuento: ${valorSubtotal}
    Impuesto: ${impuesto}
    Valor Total: ${valorTotal}`);
}
else if(valorConsumo >= 100.01){
    valorDescuento = (valorConsumo * descuento2);
    valorSubtotal = valorConsumo - valorDescuento;
    impuesto = (valorSubtotal * impuesto).toFixed(2);
    valorTotal = parseFloat(valorSubtotal) + parseFloat(impuesto);
    console.log(`Valores Obtenidos
    ValorConsumo: ${valorConsumo}
    Descuento: ${descuento2 * 100}%
    Monto con Descuento: ${valorSubtotal}
    Impuesto: ${impuesto}
    Valor Total: ${valorTotal}`);
}
else if(valorConsumo === 100){
    valorDescuento = (valorConsumo * descuento);
    valorSubtotal = valorConsumo - valorDescuento;
    impuesto = (valorSubtotal * impuesto).toFixed(2);
    valorTotal = parseFloat(valorSubtotal) + parseFloat(impuesto);
    console.log(`Valores Obtenidos
    ValorConsumo: ${valorConsumo}
    Descuento: ${descuento * 100}%
    Monto con Descuento: ${valorSubtotal}
    Impuesto: ${impuesto}
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
