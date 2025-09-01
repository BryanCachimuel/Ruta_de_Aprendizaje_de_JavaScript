const data = {
    name: "BLCL",
    description: "Programador y Desarrollador de software",
    email: "blcl@gmail.com",
    tel: "0985465987"
}

function loadUserProfile(data) {
    document.getElementById("userName").textContent = data.name;
    document.getElementById("userDescription").textContent = data.description;
    document.getElementById("userEmail").textContent = data.Email;
    document.getElementById("userTel").textContent = data.tel;
}

document.addEventListener("DOMContentLoaded", function() {
    loadUserProfile();
})