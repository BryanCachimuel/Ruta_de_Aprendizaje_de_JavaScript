/* variables */
const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

/* realizando una instancia de la clase Calculadora */
const calculadora = new Calculadora();
alert(calculadora.sumar(2,3))