
let valorResultado = document.getElementById('result')

/* calcular el perimetro */
const calcularPerimetro = (lado) => lado * 4;

/* calcular el arear */
const calcularArea =( lado) => lado * lado;

/* para darle funcionalidad al boton perimetro del cuadradp*/
function calcularPerimetroCuadrado(){
    let inputSide = document.querySelector('#inputSide')
    let valor = Number(inputSide.value);

    const resultado = `El perímetro del cuadrado es: ${calcularPerimetro(valor)} cm`
    valorResultado.innerHTML = resultado
}

/* para darle funcionalidad al boton del área del cuadrado */
function calcularAreaCuadrado(){
    let inputSide = document.querySelector('#inputSide')
    let valor = Number(inputSide.value);

    const resultado = `El área del cuadrado es: ${calcularArea(valor)} cm^2`
    valorResultado.innerHTML = resultado 
}

const perimetroTrianglo = (lado1, lado2, base) => lado1 + lado2 + base;

const areaTriangulo = (base, altura) => (base * altura)/2;

function calcularPerimetroTriangulo(){
    let inputSide1 = Number(document.querySelector('#inputSide1').value);
    let inputSide2 = Number(document.querySelector('#inputSide2').value);
    let inputSide3 = Number(document.querySelector('#inputSide3').value);

    const resultado = `El perìmetro del triangulo es: ${perimetroTrianglo(inputSide1, inputSide2, inputSide3)} cm`
    valorResultado.innerHTML = resultado
}

function calcularAreaTriangulo(){
    let inputSide4 = Number(document.querySelector('#inputSide4').value);
    let inputSide5 = Number(document.querySelector('#inputSide5').value);

    const resultado = `El área del triangulo es ${areaTriangulo(inputSide4, inputSide5)} cm^2`
    valorResultado.innerHTML = resultado
}