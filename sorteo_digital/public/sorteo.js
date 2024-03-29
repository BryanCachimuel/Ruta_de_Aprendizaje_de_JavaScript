function shuffle(array){
    
    let currentIndex = array.length,
    randomIndex;

    while(0 !== currentIndex){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[currentIndex],
            array[currentIndex],
        ];
    }
    return array;
}

function spin(){
    wheel.play();
    const box = document.getElementById("box");
    const element = document.getElementById("mainbox");
    let SelectItem = "";

    let Tv  = shuffle([1890, 2250, 2610]);
    let Laptop = shuffle([1850, 2210, 2570]);
    let Cocina = shuffle([1770, 2130, 2490]);
    let Refrigeradora = shuffle([1810, 2170, 2530]);
    let Play = shuffle([1750, 2110, 2470]);

    let Calefactor = shuffle([1630, 1990, 2350]);
    let Monitor = shuffle([1570, 1930, 2290]);
    /*let Freidora = shuffle([]);
    let Camara = shuffle([]);
    let Sillon = shuffle([]);*/

    let resultados = shuffle([
        Tv[0],
        Laptop[0],
        Cocina[0],
        Refrigeradora[0],
        Play[0],
        Calefactor[0],
        Monitor[0],
    ]);
}