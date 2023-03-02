const cambiarInterruptor = document.getElementById("cambiarInterruptor")
const cambiarFoco = document.getElementById("cambiarFoco")
const $switch = document.querySelector(".switch")

function cambiarImagen(){
    if(cambiarFoco.src.match("./publico/img/encendido-1.png") && cambiarInterruptor.src.match("./publico/img/on-or.png")){
        cambiarFoco.src = "/publico/img/apagado-1.png";
        cambiarInterruptor.src = "./publico/img/off-or.png";
    }else{
        cambiarFoco.src = "./publico/img/encendido-1.png";
        cambiarInterruptor.src = "./publico/img/on-or.png";
    }
}

$switch.addEventListener("click", cambiarImagen)