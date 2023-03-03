let estadoLicuadora = "apagado";
let licuadora = document.getElementById("blender");

let sonidoLicuadora = document.getElementById("blender-sound");
let botonLicuadora = document.getElementById("blender-button-sound");

const controlarLicuadora = () => {
    if(estadoLicuadora == "apagada"){
        estadoLicuadora = "encendido";
        InstalandoSonidosLicuadora();
        licuadora.classList.add("active");
        console.log("me prendiste");
    }else{
        estadoLicuadora = "apagada";
        InstalandoSonidosLicuadora();
        licuadora.classList.remove("active");
        console.log("me apagaste");
    }
}

const InstalandoSonidosLicuadora = () => {
    if(sonidoLicuadora.paused){
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }else{
        botonLicuadora.play();
        sonidoLicuadora.play();
    }
}