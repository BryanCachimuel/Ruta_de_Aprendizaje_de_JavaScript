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

    let results = shuffle([
        Tv[0],
        Laptop[0],
        Cocina[0],
        Refrigeradora[0],
        Play[0],
        Calefactor[0],
        Monitor[0],
    ]);

    if(Tv.includes(results[0])) SelectItem = "TV Smart TV 34";
    if(Laptop.includes(results[0])) SelectItem = "Laptop Asus Rock";
    if(Cocina.includes(results[0])) SelectItem = "Cocina 6 Quemadores";
    if(Refrigeradora.includes(results[0])) SelectItem = "Refrigeradora";
    if(Play.includes(results[0])) SelectItem = "Play Station 4 Slim";
    if(Calefactor.includes(results[0])) SelectItem = "Calefactor";
    if(Monitor.includes(results[0])) SelectItem = "Monitor LG 19'";

    box.style.setProperty("transition","all ease 5s");
    box.style.transform = "rotate(" + results[0] + " deg)";
    element.classList.remove("animate");
    setTimeout(function(){
        element.classList.add("animate");
    },5000);

    setTimeout(function(){

    })

    setTimeout(function(){
        box.style.setProperty("transition","initial");
        box.style.transform = "rotate(90deg)";
    },6000);
}