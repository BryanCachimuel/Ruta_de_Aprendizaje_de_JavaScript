/*
    Bucle For
*/

let tabla = 5;

for(let i = 0; i <= 12; i++){
    console.log(`${tabla} x ${i} = ${tabla * i}`);
}

let estudiantes = ['Bryan','Nelson','Kevin','Cristoper','Adriana','Martiza','Michelle'];

for(let i = 0; i < estudiantes.length; i++){
    console.log(`Hola, ${estudiantes[i]}`)
}

// recupera solo los indices del arreglo
for(let estudiante in  estudiantes){
    console.log(estudiante)
}

// Recupera cada elemento del arreglo
for(let estudiante of estudiantes){
    console.log(estudiante)
}