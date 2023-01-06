/* Variables */
const formulario = document.querySelector("#formulario");
const tituloForm = document.querySelector("#titulo-formulario");
let tareas = [];

/* Eventos */
(() => {
    formulario.addEventListener("submit", validarFormulario);
})()

/* Funciones */
function validarFormulario(e){
    e.preventDefault();
    // validar datos del input
    const tarea = document.querySelector("#tarea").value;
    if(!tarea.trim()){
        tituloForm.textContent = "Formulario Vacio"
        setTimeout(() => {
            tituloForm.textContent = "Agregar Tareas"
        }, 2000);
        return
    }

    /* crear un objeto */
    const objTarea = {
        id: Date.now(),
        tarea: tarea,
        estado: false
    }
    
    tareas = [...tareas, objTarea];
    
    
}