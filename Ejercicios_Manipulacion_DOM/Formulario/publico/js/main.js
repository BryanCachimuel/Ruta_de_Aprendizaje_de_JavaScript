const loginForm = document.getElementById("login-form")
const successMessage = document.getElementById("success-message");

loginForm.addEventListener("submit", function(e) {
    e.preventDefault()
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    if (username === 'blcl' && password === '123456') {
        successMessage.style.display = "block"
        successMessage.textContent = 'Start Session is Correct'
    } else {
        alert("User or Password incorrect")
    }
})