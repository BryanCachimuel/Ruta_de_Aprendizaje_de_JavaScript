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

    
}