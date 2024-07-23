// Areglo para los nombres
let nombresPokemon = ['Charmander','Pikachu','Bulbasur','Squirtle'];

// Matriz para sus habilidades
let habilidades = [
    [80,75,90], // Charmander
    [64,55,94], // Pikachu
    [80,70,64], // Bulbasur
    [85,90,70] // Squirtle
];

function calcularPromedioHabilidades(habilidades){
    let promedios = [];

    for(let i = 0; i < habilidades.length; i++){
        let fila = habilidades[i];
        let suma = fila.reduce((total, habilidad)=>total+habilidad,0);
        promedios[i] = suma/fila.length;
    }

    return promedios;
}

function evaluarAptitud(nombresPokemon, promedios){
    for(let i = 0; i < habilidades.length; i++){
        if(promedios[i] >= 70){
            console.log("El Pokemon " + nombresPokemon[i] + " supera el promedio con: " + promedios[i]);
        }
        else{
            console.log("El Pokemon " + nombresPokemon[i] + " no supera el promedio con: " + promedios[i]);
        }
    }
}