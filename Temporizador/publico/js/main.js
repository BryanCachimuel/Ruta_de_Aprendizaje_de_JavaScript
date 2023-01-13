let tiempo = 10
let contador = 0
let contando = false

function temporizar(){

    let temporizando = tiempo - contador
    let contando = temporizando > 0

    if(contador%2 == 0){
        select_id("frente").innerHTML = temporizando
    }
    style("moneda").style.transform = `rotateY(${180*contador}deg)`
    if(contando){
        contador++
        setTimeout(() => {
            temporizar()
        }, 1000);
    }
}

function select_id(id){
    return document.getElementById("frente")
}

function style(id){
    return select_id(id).style
}