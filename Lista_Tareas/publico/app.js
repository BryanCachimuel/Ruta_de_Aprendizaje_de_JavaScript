/* Variables */
const formulario = document.querySelector("#formulario");
const tituloForm = document.querySelector("#titulo-formulario");
const task = document.querySelector(".tareas");
const total = document.querySelector("#total");
const completadas = document.querySelector("#completadas");
let tareas = [];

/* Eventos */
(() => {
    formulario.addEventListener("submit", validarFormulario);
    task.addEventListener("click", eliminarTarea);
    task.addEventListener("click", tareaCompletada);
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
    
   
    formulario.reset(); // se resea el formulario y después de agregar una tarea está borra del input
    
    mostrarHTML();  // va a poder permitir que las tareas se muestren al lado derecho del formulario
}

function mostrarHTML(){

    // validando para que no se repita la tarea cuando se ingresa valores en el input
    task.innerHTML = "";

    if(tareas.length < 1){
        const mensaje = document.createElement("h5");
        mensaje.textContent = "~ SIN TAREAS ~";
        return
    }

    tareas.forEach((item) => {
        const itemTarea = document.createElement("div");
        itemTarea.classList.add("item-tarea");
        itemTarea.innerHTML = `
            ${item.estado ? (
                `<p class="completa">${item.tarea}</p>`
            ) : (
                `<p>${item.tarea}</p>`
            )}
            <div class="botones">
                <button data-id="${item.id}" class="eliminar">X</button>
                <button data-id="${item.id}" class="completada">?</button>
            </div>
        `;
        
        task.appendChild(itemTarea)
    })

    // mostrar el total de tareas completadas
    const totalTareas = tareas.length;
    total.textContent = `Total de Tareas: ${totalTareas}`;

    // mostrar tareas completadas
    const tareasCompletadas = tareas.filter( item => item.estado === true ).length;
    completadas.textContent = `Tareas Completadas = ${tareasCompletadas}`;

}

/* eliminar tarea */
function eliminarTarea(e){
    if(e.target.classList.contains("eliminar")){
        const tareaID = Number(e.target.getAttribute("data-id"));
        // eliminar tarea
        const nuevaTarea = tareas.filter( (item) => item.id !== tareaID );
        tareas = nuevaTarea;
        mostrarHTML();
    }
}


/* seleccionar las tareas completadas */
function tareaCompletada(e){
    if(e.target.classList.contains("completada")){
        const tareaID = Number(e.target.getAttribute("data-id"));
        // dar como completada la tarea
        const nuevaTarea = tareas.map( (item) => {
            if(item.id === tareaID){
                item.estado = !item.estado
                return item;
            }else{
                return item;
            }
        })

        tareas = nuevaTarea;
        mostrarHTML();
    }
}