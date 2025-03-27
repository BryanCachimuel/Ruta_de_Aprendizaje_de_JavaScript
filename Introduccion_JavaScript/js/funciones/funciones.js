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
