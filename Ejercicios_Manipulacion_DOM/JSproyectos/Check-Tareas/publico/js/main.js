const frmTask = document.querySelector("#frmTask");
const inputTask = document.querySelector("#task");
const contentList = document.querySelector("#contentList");
//modal
const showModal = document.querySelector('#showModal');
const btnNo = document.querySelector('#btnNo');
const btnSi = document.querySelector('#btnSi');

let tasksList = [];

document.addEventListener("DOMContentLoaded", () => {
    frmTask.addEventListener("submit", newTask);
    btnNo.addEventListener('click', cancelDeletion);
    btnSi.addEventListener('click', approvedDeletion);

    const tasks = localStorage.getItem('tasks');
    if(tasks) {
        tasksList = JSON.parse(tasks);
        printHtml();
    }
});

function newTask(e) {
    e.preventDefault();
    const task = inputTask.value.trim();

    if(task.length === 0) {
        showAlert('La tarea es requerida','error')
        return;
    }

    const taskObj = { task, id: Date.now(), completed: false }
    tasksList = [...tasksList, taskObj];

    frmTask.reset();
    inputTask.focus();
    showAlert('Tarea Agregada exitosamente', 'success');
    printHtml();
    saveTaskToLocalStorage();
}

// Guardar las tareas en local storage
function saveTaskToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasksList));
}

// Imprime el HTML
function printHtml() {
    cleanHTML();
    tasksList.forEach(tasks => {
        const { id, task } = tasks;
        const liTask = document.createElement('li');

        const divText = document.createElement('div');
        const pCheck = document.createElement('p');
        pCheck.classList.add('check');

        const pSpan = document.createElement('span');
        pSpan.textContent = '✔';

        const pText = document.createElement('p');
        pText.classList.add('task-text');
        pText.textContent = task;

        const divButtons = document.createElement('div');
        const buttonCheck = document.createElement('button');
        buttonCheck.type = 'button';
        buttonCheck.textContent = '✔'; 
        buttonCheck.onclick = (e) => completedTask(e, id);

        const buttonDestroy = document.createElement('button');
        buttonDestroy.type = 'button';
        buttonDestroy.textContent = 'X';
        buttonDestroy.onclick = () => modalDeletion(id);


        pCheck.appendChild(pSpan);
        divText.append(pCheck, pText);
        divButtons.append(buttonCheck, buttonDestroy);

        liTask.append(divText, divButtons);

        contentList.appendChild(liTask);
    });
}

// Abre el modal de eliminación
function modalDeletion(taskId) {
    showModal.style.display = 'flex';
    btnSi.dataset.taskId = taskId;
}

// Cancela la eliminación
function cancelDeletion() {
    showModal.style.display = 'none';
}

// Elimina una tarea
function approvedDeletion() {
    const taskId = parseInt(btnSi.dataset.taskId, 10);
    tasksList = tasksList.filter(task => task.id !== taskId);
    showModal.style.display = 'none';
    showAlert('Tarea eliminada exitosamente','success');
    printHtml();
}

// marcar una tarea como completada o no completada
function completedTask(e, taskId) {
    const taskItem = e.target.closest('li');
    if(!taskItem) return;

    const taskIndex = tasksList.findIndex(t => t.id === taskId);
    if(taskIndex === -1) return;

    const wasCompleted = tasksList[taskIndex].completed;
    tasksList[taskIndex].completed = !wasCompleted;

    updateTaskStyle(taskItem, tasksList[taskIndex].completed, true);
}

function updateTaskStyle(taskItem, completed, userAction = false) {
    const taskText = taskItem.querySelector('.task-text');
    const taskCheck = taskItem.querySelector(".check span");

    if(completed) {
        taskItem.style.backgroundColor = '#6b6b6b';
        taskText.style.textDecoration = 'line-through';
        taskText.style.color = '#b2b2b2';
        taskCheck.style.display = 'inline';

        if(userAction) {
            showAlert('La tarea fue marcada como completada','success');
        }
    } else {
        taskItem.style.backgroundColor = '#3b82f6';
        taskText.style.textDecoration = 'none';
        taskText.style.color = '#ffffff';
        taskCheck.style.display = 'none';

        if(userAction) {
            showAlert('La tarea fue marcada como no pendiente','success');
        }
    }
}

// Limpiar el HTML
function cleanHTML() {
    while(contentList.firstChild) {
        contentList.removeChild(contentList.firstChild);
    }
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