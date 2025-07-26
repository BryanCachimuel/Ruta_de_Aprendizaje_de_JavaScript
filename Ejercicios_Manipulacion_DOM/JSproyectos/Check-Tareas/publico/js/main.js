const frmTask = document.querySelector("#frmTask");
const inputTask = document.querySelector("#task");
const contentList = document.querySelector("#contentList");
//modal
const showModal = document.querySelector('#showModal');
const btnNo = document.querySelector('#btnNo');

let tasksList = [];

document.addEventListener("DOMContentLoaded", () => {
    frmTask.addEventListener("submit", newTask);
    btnNo.addEventListener('click', cancelDeletion)
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
function modalDeletion(id) {
    showModal.style.display = 'flex';
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