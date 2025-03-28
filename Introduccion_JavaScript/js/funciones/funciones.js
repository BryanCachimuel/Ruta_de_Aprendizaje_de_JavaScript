/*
    Funciones
*/

function saludar(){
    console.log('Hola desde una función')
}

saludar()

// Párametros y argumentos

function nombrar(nombre){
    console.log(`Tu nombre es: ${nombre}`)
}

nombrar('Ara')

function sumar(valor1, valor2){
    let resultado = valor1 + valor2;
    console.log(resultado)
}

sumar(10,20);

// funciones con retorno

function datosPersonas(nombre, edad, telefono){
    return `Datos Personas: 
                Nombre: ${nombre}
                Edad: ${edad}
                Teléfono: ${telefono}`
}

let datos = datosPersonas('BLCL',30,'0987574126')

console.log(datos)

// Valores predeterminados de párametros y funciones
function multiplicar(a=null, b=null){
    if(a === null || b === null){
        console.log('Debes enviar dos números a la función');
        return '';
    }
    return a * b;
}

let producto = multiplicar(10,9);
console.log(producto)

/* Argumentos Indeterminados */
function sumar(...args){
    let sumar = 0;
    for(let i = 0; i < args.length; i++){
        sumar += args[i];
    }

    return sumar;
}

let n = sumar(4,8,20,17,95,52,14);
console.log('La suma es: ',n)

/* Funciones Recursivas */
function factorial(n){
    console.log(n)

    if(n > 1){
        n = n * factorial(n - 1);
        console.log(n);
    }

    return n;
}

factorial(5);

/* Funciones Flecha */

const restar = (a, b) => a - b;

console.log(restar(25,16))

const promedio = (a,b,c,d) => {
    let promedio = (a + b + c + d)/4;
    return promedio;
}

console.log(promedio(8,7,9,10))