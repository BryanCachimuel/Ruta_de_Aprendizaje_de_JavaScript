let estadoLicuadora = "apagado";

let licuadora = document.getElementById("blender");

const controlarLicuadora = () => {
    if(estadoLicuadora == "apagada"){
        estadoLicuadora = "encendido";
        console.log("me prendiste")
    }else{
        estadoLicuadora = "apagada";
        console.log("me apagaste")
    }
}