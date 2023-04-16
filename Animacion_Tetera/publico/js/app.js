window.onload = () => {
    let botonServir = document.getElementById('boton-servir');
    let videoTacita = document.getElementById('tacita');
    let videoTacitaHumeando = document.getElementById('tacita-humeando');
    let estadoTacita = 'vacia';

    botonServir.onclick = () => {
        if(estadoTacita == 'vacia'){
            reproducir(videoTacita);
            videoTacita.onended = () => {
                ocultar(videoTacita);
                mostrar(videoTacitaHumeando);
                reproducir(videoTacitaHumeando, 'loopear');
                resetear(videoTacita);
                estadoTacita = 'llena';
            }
        }
    }
}