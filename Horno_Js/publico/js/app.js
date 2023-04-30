let estadoHorno = 'apagado', videoHornoActual, puertaHorno, puertaBloqueada = false;

window.onload = () => {
    videoHornoActual = document.getElementById('video-horno');
    puertaHorno = document.getElementById('puerta-horno');

    puertaHorno.onclick = () => {
        if(!puertaBloqueada) {
            
            if(estadoHorno == 'tarta-lista') {
                estadoHorno = 'retirar-lista';
            } else if (estadoHorno == 'tarta-quemada') {
                estadoHorno = 'retirar-quemada';
            }
            avanzarAnimacion();
        }
    }

    function avanzarAnimacion(){
        console.log(estadoHorno);
        switch(estadoHorno){
            case 'apagado':
                reproducirSonido('puerta', false);
                bloquearPuerta(true);
                mostrarVideo();
                reproducirVideo('horno-abriendo-puerta');
                cuandoTerminaAvanzarA('cocinando');
                break;
            
            case 'cocinando':
                reproducirSonido('horno-cocinando');
                reproducirSonido('timer', true);
                rotarPerrilla(20);
                cuandoTerminaAvanzarA('tarta-lista');
                break;
            
            case 'tarta-lista':
                detenerSonido();
                bloquearPuerta(false);
                reproducirVideo('horno-tarta-lista');
                reproducirSonido('campanita', false);
                loopear(10000);
                cuandoTerminaAvanzarA('tarta-quemandose');
                break;
            
            case 'tarta-quemandose' :
                detenerSonido();
                bloquearPuerta(true);
                reproducirVideo('horno-tarta-quemandose');
                cuandoTerminaAvanzarA('tarta-quemada');
                break;
    
            case 'tarta-quemada' :
                bloquearPuerta(false);
                reproducirVideo('horno-tarta-quemada');
                loopear()
                break;
            
            case 'retirar-lista':
                reproducirSonido('puerta-con-tarta', false);
                bloquearPuerta(true);
                reproducirVideo('horno-retirar-lista');
                reiniciar();
                break;
    
            case 'retirar-quemada':
                reproducirSonido('puerta-con-tarta', false);
                bloquearPuerta(true);
                reproducirVideo('horno-retirar-quemada');
                reiniciar();
                break;
    
            default:
                break;
        }
    }

    function cuandoTerminaAvanzarA(estado){
        videoHornoActual.onended = () => {
            actualizarEstadoA(estado);
            avanzarAnimacion();
        }
    }

    function actualizarEstadoA(estado){
        estadoHorno = estado;
    }

    function bloquearPuerta(traba){
        puertaBloqueada = traba;
    }

    function reproducirVideo(nombreVideo){
        videoHornoActual.src = `../tools/video/${nombreVideo}.webm`;
        videoHornoActual.play();
    }

    function loopear(time){
        videoHornoActual.loop = true;
        if(time != undefined){
            setTimeout(() => {
                desLoopear();
            }, 10000);
        }
    }

    function desLoopear(){
        videoHornoActual.loop = false;
    }
}