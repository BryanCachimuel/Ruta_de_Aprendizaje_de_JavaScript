/*
    Bucle While
*/

let numero = 12;
let contador = 0;

while(contador <= 12){
    console.log(`${numero} x ${contador} = ${numero *  contador}`);
    contador++;
}

let amigos = ['Michelle', 'Nelson','Cristoper','Franklin','Kevin','Katherine','Jocelyn','Gabriel','Joseph'];
let indices = 0;
while(indices < amigos.length){
    console.log(`Hola ${amigos[indices]}`)
    indices++;
}

/*
    bucle do while
*/
let cadena = 'Javascript';
let contar = 0;
do{
    console.log(`${cadena[contar]}`);
    contar++;
}while(contar < cadena.length);

