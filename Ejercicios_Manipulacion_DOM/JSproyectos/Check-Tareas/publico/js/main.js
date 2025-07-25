const frmTask = document.querySelector("#frmTask");
const inputTask = document.querySelector("#task");

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
    console.log('Pasaste')  
}