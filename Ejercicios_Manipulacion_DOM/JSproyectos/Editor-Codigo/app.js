/* Obtener los elementos del DOM */

const codeEditor = document.getElementById("code-editor")
const outputDiv = document.getElementsByClassName("output")
const runButton = document.getElementById("run-button")

runButton.addEventListener("click", runCode)

/* Se define la función */
function runCode(){
    const code = codeEditor.value;

    try {
        const resultado = eval(code)
        outputDiv.textContent = resultado
    } catch (error) {
        outputDiv.textContent = `Error: ${error.message}`
    }
}