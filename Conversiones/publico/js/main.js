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

const validarEntrada = () => {
    (entrada.value === "") ? alert('Ingrese Datos') : console.log('Proceso realizado con Exito');
}

const convertirDecimalABinario = () => {
    numeroDecimal = entrada.value;
    divisor = 2;
    let numeroSalida = "";
    while(numeroDecimal >= 2){
        cociente = Math.trunc(numeroDecimal/divisor);
        residuo = numeroDecimal % divisor;
        numeroSalida += residuo.toString();
        numeroDecimal = cociente;
    }
    let auxiliar = numeroDecimal.toString();
    numeroSalida += auxiliar;
    return numeroSalida;
}

