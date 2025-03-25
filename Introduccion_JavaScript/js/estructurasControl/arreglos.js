/*
    Arreglos
 */

let arreglo = ['BLCL', 'sistermas', 30, true, 960.50]

// modificar un elemento del arreglo
arreglo[4] = 1200.75

// agregar un elemento al final del arreglo
arreglo.push('soltero')

// agregar un elemento al inicio del arreglo
arreglo.unshift('Masculino')

// eliminar un elemento (el último elemento del arreglo)
arreglo.pop()

// eliminar un elemento (el primer elemento del arreglo)
arreglo.shift()


console.log(arreglo)

//saber cuantos elementos tiene un arreglo
console.log(arreglo.length)

// conocer el indice de un elemento
console.log(arreglo.indexOf(true))