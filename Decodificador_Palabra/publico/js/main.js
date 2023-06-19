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