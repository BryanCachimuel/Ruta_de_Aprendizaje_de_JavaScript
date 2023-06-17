let encendidas = [false, false, false, false];
let luces = document.querySelectorAll(".luz");
let textos = document.querySelectorAll(".texto");
let inputs = document.querySelectorAll("input");

function encender(i){
    if(encendidas[i]==false){
        luces[i].className="luz l"+i;
        textos[i].className="texto t"+i;
        encendidas[i] = true;
    }else{
        luces[i].className="luz";
        textos[i].className="texto";
        encendidas[i] = false;
        inputs[i].checked = false; 
    }
}