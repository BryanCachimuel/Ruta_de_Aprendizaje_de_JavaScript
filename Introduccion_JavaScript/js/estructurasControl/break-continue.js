/*
    Breack y Continue
*/

let b = 0;

while (b< 10) {
    b++;
    if(b === 5){
        console.log('Termina el bucle por el break')
        break;
    }
    console.log(b)
}

console.log('\n')

let c = 0;

while (c < 10) {
    c++;
    if(c === 5){
        console.log('Salta a la siguiente línea por el continue')
        continue;
    }
    console.log(c)
}

