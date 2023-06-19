let bd = new Array(3);
bd[0] = ['PIÑA', 'PLATANO', 'NARANJA', 'MANGO', 'PAPAYA','MANDARINA', 'KIWI'];
bd[1] = ['PIANO', 'GUITARRA', 'VIOLIN', 'FLAUTA', 'TROMPETA', 'SAXOFON', 'BATERIA'];
bd[2] = ['LEON', 'JABALI', 'ORANGUTAN', 'LEOPARDO', 'MURCIELAGO', 'MONO', 'ELEFANTE'];
bd[3] = ['ARGENTINA', 'CANADA', 'GUATEMALA', 'COLOMBIA', 'BRASIL', 'MEXICO', 'ECUADOR'];

//categorías
let categorias = ['FRUTAS', 'MUSICA', 'ANIMALES', 'PAISES']

//cantidad de palabras con las que se jugará cada categiría
const cantidadPalabras = 5;

//este arreglo guardará las 5 palabras en cada categoría
let palabras = [];

//este arreglo guardá las las palabras desordenadas
let desordenadas = [];

//mantiene el nivel actual
let pos = 0;

//tomo una cagegoría y selección 5 palabras random para jugar
function agregarPalabras(categoria){
    for(i=0;i<cantidadPalabras;i++){
        let x = Math.floor(Math.random() * categoria.length);
        palabras.push(categoria[x]);
        categoria.splice(x,1);
    }   
}
agregarPalabras(bd[pos]);

//Función para desordenar las palabras - quedan guardadas en :desordendadas
function desordenarPalabras(){
    for(var i=0;i<palabras.length;i++){
        let palabra = palabras[i];
        palabra = palabra.split('');
    
        let palabraDesordenada;
        palabraDesordenada = palabra.sort(function(){return Math.random() - 0.5});
    
        palabraDesordenada = palabraDesordenada.toString();
        palabraDesordenada = palabraDesordenada.replace(/,/g,"");
    
        if(palabraDesordenada == palabras[i]){
            i = i - 1;
        }else{
            desordenadas.push(palabraDesordenada);
        }
    }
}
