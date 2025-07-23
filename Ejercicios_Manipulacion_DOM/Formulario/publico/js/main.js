const loginForm = document.getElementById("login-form")
const successMessage = document.getElementById("success-message")

loginForm.addEventListener("submit", function(e) {
    e.preventDefault()
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    if (username === 'blcl' && password === '123456') {
        message(successMessage)
        clearInputs()
    } else {
        alert("User or Password incorrect")
    }
})

function clearInputs(){
    const username = document.getElementById("username").value = ''
    const password = document.getElementById("password").value = ''
}

function message(success){
    successMessage.style.display = "block"
    successMessage.textContent = 'Start Session is Correct'
    setTimeout(() => {
        successMessage.style.display = "none"
    }, 4000);
}