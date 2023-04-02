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

function mostrarLetra(lyrics){
    sideLetters.innerHTML = "";
    const title = document.createElement("h3");
    title.innerText = `${cancion.value} de: ${artista.value}`;
    sideLetters.appendChild(title);

    const letra = document.createElement("p");
    letra.innerText = lyrics;
    sideLetters.appendChild(letra);
}

function mostrarError(mensaje){
    const error = document.createElement("p");
    error.classList.add("error-mensaje");
    error.innerText = mensaje;

    sideLeft.appendChild(error);
    setTimeout(() => {
        error.remove();
    }, 2000);
}