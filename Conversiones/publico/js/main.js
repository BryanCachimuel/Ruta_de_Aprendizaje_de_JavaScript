const entrada = document.getElementById("entrada");
const boton = document.getElementById("btn");
const salida = document.getElementById("salida");

let numeroDecimal;
let divisor;
let resultadoBinario;
let cociente;
let residuo;

boton.addEventListener('click', ()=>{
    validarEntrada();
    resultadoBinario = convertirDecimalABinario();
    salida.value = invertirCadena(resultadoBinario);
});
