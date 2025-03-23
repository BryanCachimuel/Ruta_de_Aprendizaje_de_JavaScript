/*
    Conversión de datos

    a String => String(), toString()
    a Números => Number(), parseInt()
    a Decimal => Number(), parseFloat()
 */

// Conversión de entero a string
let dato = 15;
console.log(typeof(dato));

dato = String(dato);
console.log(typeof(dato));

dato = dato.toString();
console.log(typeof(dato));

// Conversión de string a entero
let tallaCamiseta = "36";
console.log(typeof(tallaCamiseta));

tallaCamiseta = Number(tallaCamiseta);
console.log(typeof(tallaCamiseta));

tallaCamiseta = parseInt(tallaCamiseta);
console.log(typeof(tallaCamiseta));

// Conversion de String a float
let sueldo = "780.50"
console.log(typeof(sueldo))

sueldo = Number(sueldo)
console.log(typeof(sueldo))

sueldo = parseFloat(sueldo)
console.log(typeof(sueldo))