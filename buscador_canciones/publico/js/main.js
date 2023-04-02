const sideLetters = document.querySelector(".side-right");
const sideLeft = document.querySelector(".side-left");
const searchLetters = document.querySelector(".search-letters");

const artista = document.querySelector(".artist");
const cancion = document.querySelector(".song");

searchLetters.addEventListener("click", (e) => {
    e.preventDefault();
    //console.log(artista.value);
    //console.log(cancion.value);
    if (artista.value === "" || cancion.value === "") {
        mostrarError("Ambos campos son obligatorios...");
        return;
    }

    callApiSong(artista.value, cancion.value);
})

function callApiSong(artista, cancion){
    fetch(`https://api.lyrics.ovh/v1/${artista}/${cancion}`)
        .then(respuesta => respuesta.json())
        .then(resultado => {
            //console.log(resultado);
            if (resultado.lyrics) {
                const {lyrics} = resultado;
                mostrarLetra(lyrics);
            } else {
                mostrarError("La cancion no existe...");
            }
        })
        .catch(error => console.log(error));
}