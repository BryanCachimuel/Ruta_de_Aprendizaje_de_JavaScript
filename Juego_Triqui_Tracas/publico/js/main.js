/* creando los caracteres del tablero */
const x = "X";
const o = "O";

/* elementos de la página */
const cuadrados = document.querySelectorAll(".cuadrado");
const modal = document.querySelector("dialog");
const textoModal = modal.querySelector("h2");
let estadoJuego = "P1";

cuadrados.forEach((cuadrado, posicion) => {
    cuadrados.addEventListener("click", () => {
        if(estadoJuego === "PAUSA") return;
        if(cuadrado.textContent !== "") return;
        cuadrado.textContent = estadoJuego === "P1" ? x : o;
        estadoJuego = estadoJuego === "P1" ? "P2" : "P1";
        const posicionGanadora = revisarSiHayGanador();
        console.log(typeof posicionGanadora);
        if(typeof posicionGanadora === "object"){
            ganar(posicionGanadora)
            return
        };
        if(posicionGanadora === "empate"){
            mostrarModal("Empate")
        }
    })
})