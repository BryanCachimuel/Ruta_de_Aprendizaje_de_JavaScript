//arraglo que contiene la ubicación de las imagenes
const array = [
    {
        'case': ' ',
        'imagen': './img/ESPACIO.PNG'
    },
    {
        'case': 'A',
        'imagen': './img/A.PNG'
    },
    {
        'case': 'B',
        'imagen': './img/B.PNG'
    },
    {
        'case': 'C',
        'imagen': './img/C.PNG'
    },
    {
        'case': 'D',
        'imagen': './img/D.PNG'
    },
    {
        'case': 'E',
        'imagen': './img/E.PNG'
    },
    {
        'case': 'F',
        'imagen': './img/F.PNG'
    },
    {
        'case': 'G',
        'imagen': './img/G.PNG'
    },
    {
        'case': 'H',
        'imagen': './img/H.PNG'
    },
    {
        'case': 'I',
        'imagen': './img/I.PNG'
    },
    {
        'case': 'J',
        'imagen': './img/J.PNG'
    },
    {
        'case': 'K',
        'imagen': './img/K.PNG'
    },
    {
        'case': 'L',
        'imagen': './img/L.PNG'
    },
    {
        'case': 'M',
        'imagen': './img/M.PNG'
    },
    {
        'case': 'N',
        'imagen': './img/N.PNG'
    },
    {
        'case': 'O',
        'imagen': './img/O.PNG'
    },
    {
        'case': 'P',
        'imagen': './img/P.PNG'
    },
    {
        'case': 'Q',
        'imagen': './img/Q.PNG'
    },
    {
        'case': 'R',
        'imagen': './img/R.PNG'
    },
    {
        'case': 'S',
        'imagen': './img/S.PNG'
    },
    {
        'case': 'T',
        'imagen': './img/T.PNG'
    },
    {
        'case': 'U',
        'imagen': './img/U.PNG'
    },
    {
        'case': 'V',
        'imagen': './img/V.PNG'
    },
    {
        'case': 'W',
        'imagen': './img/W.PNG'
    },
    {
        'case': 'X',
        'imagen': './img/X.PNG'
    },
    {
        'case': 'Y',
        'imagen': './img/Y.PNG'
    },
    {
        'case': 'Z',
        'imagen': './img/Z.PNG'
    }
];

/* constantes globales utilizadas dentro del ejercicio */
const seccionTraducir = document.getElementById('sec-traducir');
const seccionAcerca = document.getElementById('sec-acerca-de');
const btnTraducir = document.getElementById('btn-traducir');
const btnAcerca = document.getElementById('btn-acerca');
const btnTraducirName = document.getElementById('btn-traducir-ya');
const contenedorTraslate = document.getElementById('contenedor-traslate');
const InputAccion = document.getElementById('input-traducir');
const btnReset = document.getElementById('btn-reset');


let nombre;
let opcionImagen;
let remover;

//evento para escuchar cuando se hace cick en el boton traducir
btnTraducirName.addEventListener('click', traduccion);

//función que cumple el proceso de traducción
function traduccion(){
    //se obtiene el valor del input y se lo guarda en la variable nombre
    nombre = document.getElementById('input-traducir').value;

    if(nombre == ""){
        alert("Ingresa tu nombre!")
    }else{
        //se descompone el nombre por letras
        for(let i=0;i<nombre.length;i++){
            let descomposicion = nombre[i];
            //recorreo el arreglo para hacer la validación
            for(let j=0;j<array.length;j++){
                //compará el nombre con las letras del arreglo
                if(descomposicion.toUpperCase() == array[j].case){
                    //se crea la etiqueta de la imagen correspondiente
                    opcionImagen =  `
                        <img class="remove" src="${array[j].imagen}" alt="${array[j].name}">
                    `;

                    contenedorTraslate.innerHTML += opcionImagen;
                    btnTraducirName.disabled = true;
                    InputAccion.disabled = true;
                    btnReset.style.display = 'flex';
                }
            }
        }
    }
    btnReset.addEventListener('click', reseteo);
}

function reseteo(){
    location.reload();
}

function iniciar(){
    seccionAcerca.style.display = 'none';
    btnTraducir.classList.add('is-active');
    btnReset.style.display = 'none';
}

/* proceso del boton traducir */
btnTraducir.addEventListener('click', function(){
    seccionAcerca.style.display = 'none';
    btnAcerca.classList.remove('is-active');
    seccionTraducir.style.display = 'flex';
    btnTraducir.classList.add('is-active');
});

