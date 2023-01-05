/* Variables */
const formulario = document.querySelector("#formulario");

/* Eventos */
(() => {
    formulario.addEventListener("submit", validarFormulario);
})()

/* Funciones */
function validarFormulario(e){
    e.preventDefault();
    alert('enviando datos');
}