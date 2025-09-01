const data = {
    name: "BLCL",
    description: "Programador y Desarrollador de software",
    email: "blcl@gmail.com",
    phone: "0985465987",
    ubication: "Ecuador"
}

function loadUserProfile(data) {
    document.getElementById("userName").textContent = data.name;
    document.getElementById("userDescription").textContent = data.description;
    document.getElementById("userEmail").textContent = data.email;
    document.getElementById("userTelefono").textContent = data.phone;
    document.getElementById("userUbicacion").textContent = data.ubication;
}

document.addEventListener("DOMContentLoaded", function() {
    loadUserProfile(data);
})