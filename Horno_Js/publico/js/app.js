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
        }
    }
}