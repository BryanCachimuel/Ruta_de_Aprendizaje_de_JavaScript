/*
    Métodos de Cadenas
*/

let texto = 'JavaScript'

// primer parámetro indica la letra a sustituirse y la segunda por que letra va a ser sustituida el primer parámetro 
let remplazar = texto.replace('S','s');
console.log(remplazar)

// transforma todo a minuscula
let minusculas = texto.toLowerCase()
console.log(minusculas)

// transforma todo a mayuscula
let mayusculas = texto.toUpperCase()
console.log(mayusculas)

// convertir a un arreglo y que cada palabra sea un elemento del arreglo
let parrafo = 'Hola desde el lenguaje de programación JavaScript'
let arreglo = parrafo.split(' ')
console.log(arreglo)

// revertir los elementos del arreglo
let revertir = arreglo.reverse()
console.log(revertir)

// convertir un arreglo en texto
let convertirTexto = arreglo.join(' ')
console.log(convertirTexto)