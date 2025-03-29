
let valorResultado = document.getElementById('result')
/* calcular el perimetro */
const calcularPerimetro = (lado) => lado * 4;

/* calcular el arear */
const calcularArea =( lado) => lado * lado;

/* para darle funcionalidad al boton perimetro */
function calcularPerimetroCuadrado(){
    let inputSide = document.querySelector('#inputSide')
    let valor = Number(inputSide.value);

    const resultado = `El perímetro del cuadrado es: ${calcularPerimetro(valor)} cm`
    valorResultado.innerHTML = resultado
}

function calcularAreaCuadrado(){
    let inputSide = document.querySelector('#inputSide')
    let valor = Number(inputSide.value);

    const resultado = `El área del cuadrado es: ${calcularArea(valor)} cm^2`
    valorResultado.innerHTML = resultado 
}
