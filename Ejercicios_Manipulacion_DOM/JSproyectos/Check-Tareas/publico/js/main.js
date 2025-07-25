const frmTask = document.querySelector("#frmTask");
const inputTask = document.querySelector("#task");

let tasksList = [];

document.addEventListener("DOMContentLoaded", () => {
    frmTask.addEventListener("submit", newTask)
});

function newTask(e) {
    e.preventDefault();
    const task = inputTask.value.trim();

    if(task.length === 0) {
        showAlert('La tarea es requerida','error')
        return;
    }

    const taskObj = { task, id: Date.now() }
    tasksList = [...tasksList, taskObj];

    frmTask.reset();
    inputTask.focus();
    showAlert('Tarea Agregada exitosamente', 'success');
    printHtml();
}

// Imprime el HTML
function printHtml() {
    tasksList.forEach(tasks => {
        const { id, task } = tasks;
    })
}

// Muestra una alerta
function showAlert(message, type) { 
    const alertNotRepeat = document.querySelector(".alert");
    if(alertNotRepeat){
        alertNotRepeat.remove();
    }
    const div = document.createElement('div');
    div.classList.add('alert',type);
    div.textContent = message;

    document.body.appendChild(div);

    setTimeout(() => {
        div.remove()
    }, 4000);
}