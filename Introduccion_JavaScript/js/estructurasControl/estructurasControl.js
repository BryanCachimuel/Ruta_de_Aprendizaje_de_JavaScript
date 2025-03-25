/*
    Estructuras de Control if-else
*/

let valor = 23;

if(valor % 2 === 0){
    console.log(`El valor ${valor} es par`)
} else {
    console.log(`El valor ${valor} es impar`)
}

// Condiciones anidadas
let valor2 = 28;
   
if(valor2 !== 0){
    if(valor2 > 0){
        if(valor2 % 2 === 0){
            console.log(`El valor ${valor2} es par positivo`)
        } else {
            console.log(`El valor ${valor2} es impar positivo`)
        }
    }else{
        if(valor2 % 2 === 0){
            console.log(`El valor ${valor2} es par negativo`)
        } else {
            console.log(`El valor ${valor2} es impar negativo`)
        }
    }
}else{
    console.log(`El valor ${valor2} es neutro`)
}

// Multiples Condiciones
let vocal = 'i'

if(vocal === 'a' || vocal === 'A'){
    console.log(`${vocal} es vocal`)
}
else if(vocal === 'e' || vocal === 'E'){
    console.log(`${vocal} es vocal`)
}
else if(vocal === 'i' || vocal === 'I'){
    console.log(`${vocal} es vocal`)
}
else if(vocal === 'o' || vocal === 'O'){
    console.log(`${vocal} es vocal`)
}
else if(vocal === 'u' || vocal === 'U'){
    console.log(`${vocal} es vocal`)
}
else{
    console.log(`${vocal} no  es una vocal`)
}