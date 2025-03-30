
let valorResultado = document.getElementById('result')

/*
    Cuadrado
*/

/* calcular el perimetro */
const perimetroCuadrado = (lado) => lado * 4;

/* calcular el arear */
const areaCuadrado =( lado) => lado * lado;

/* para darle funcionalidad al boton perimetro del cuadradp*/
function calcularPerimetroCuadrado(){
    let inputSide = document.querySelector('#inputSide')
    let valor = Number(inputSide.value);

    const resultado = `El perímetro del cuadrado es: ${perimetroCuadrado(valor)} cm`
    valorResultado.innerHTML = resultado
}

/* para darle funcionalidad al boton del área del cuadrado */
function calcularAreaCuadrado(){
    let inputSide = document.querySelector('#inputSide')
    let valor = Number(inputSide.value);

    const resultado = `El área del cuadrado es: ${areaCuadrado(valor)} cm^2`
    valorResultado.innerHTML = resultado 
}

/*
    Triángulo
*/

const perimetroTrianglo = (lado1, lado2, base) => lado1 + lado2 + base;

const areaTriangulo = (base, altura) => (base * altura)/2;

/* para darle funcionalidad al boton del perímetro del triangulo */
function calcularPerimetroTriangulo(){
    let inputSide1 = Number(document.querySelector('#inputSide1').value);
    let inputSide2 = Number(document.querySelector('#inputSide2').value);
    let inputSide3 = Number(document.querySelector('#inputSide3').value);

    const resultado = `El perìmetro del triangulo es: ${perimetroTrianglo(inputSide1, inputSide2, inputSide3)} cm`
    valorResultado.innerHTML = resultado
}

/* para darle funcionalidad al boton del área del triangulo */
function calcularAreaTriangulo(){
    let inputSide4 = Number(document.querySelector('#inputSide4').value);
    let inputSide5 = Number(document.querySelector('#inputSide5').value);

    const resultado = `El área del triangulo es ${areaTriangulo(inputSide4, inputSide5)} cm^2`;
    valorResultado.innerHTML = resultado;
}

/*
    Círculo
*/

const diametroCirculo = (radio) => radio * 2;

const perimetroCirculo = (radio) => diametroCirculo(radio) * Math.PI;

const areaCirculo = (radio) => (radio * radio) * Math.PI;

// para darle funcionalidad al boton para calcular el diámetro del circulo
function calcularDiametroCirculo(){
    let inputSide6 = Number(document.querySelector('#inputSide6').value);

    const resultado = `El diámetro del circulo es: ${diametroCirculo(inputSide6)} cm`;
    valorResultado.innerHTML = resultado;
}

// para darle funcionalidad al boton para calcular el diámetro del circulo
function calcularperimetroCirculo(){
    let inputSide6 = Number(document.querySelector('#inputSide6').value);

    // resulado del calculo con 2 decimales
    let transformandoResultado = perimetroCirculo(inputSide6).toFixed(2)

    const resultado = `El peímetro del circulo es: ${transformandoResultado} cm`;
    valorResultado.innerHTML = resultado;
}

// para darle funcionalidad al boton para calcular el área del circulo
function calcularAreaCirculo(){
    let inputSide6 = Number(document.querySelector('#inputSide6').value);

    // resulado del calculo con 2 decimales
    let transformandoResultado = areaCirculo(inputSide6).toFixed(2);

    const resultado = `El área del circulo es: ${transformandoResultado} cm^2`;
    valorResultado.innerHTML = resultado;
}

function limpiarCampos(){
    let inputSide = document.querySelector('#inputSide').value = '';
    let inputSide1 = document.querySelector('#inputSide1').value = '';
    let inputSide2 = document.querySelector('#inputSide2').value = '';
    let inputSide3 = document.querySelector('#inputSide3').value = '';
    let inputSide4 = document.querySelector('#inputSide4').value = '';
    let inputSide5 = document.querySelector('#inputSide5').value = '';
    let inputSide6 = document.querySelector('#inputSide6').value = '';
}
