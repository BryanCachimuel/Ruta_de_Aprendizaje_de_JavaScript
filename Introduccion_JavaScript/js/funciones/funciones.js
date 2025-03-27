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
