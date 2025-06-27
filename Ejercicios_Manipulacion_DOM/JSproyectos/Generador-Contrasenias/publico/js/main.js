// selección de elemetos
const cantidad = document.querySelector(".cantidad");
const btnGenerar = document.querySelector(".btn-generar");
const btnLimpiar = document.querySelector(".btn-limpiar");
const contrasenia = document.querySelector(".contraseña");
const alerta = document.querySelector(".alerta");

// Caracteres disponibles para la contraseña
MAYUSCULAS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
MINUSCULAS = "abcdefghijklmnopqrstuvwxyz"
NUMEROS = "0123456789"
ESPECIALES = "!@#$%^&*()"

const caracteres = MAYUSCULAS + MINUSCULAS + NUMEROS + ESPECIALES

// Asignar eventos
btnGenerar.addEventListener("click", generarContrasenia);
btnLimpiar.addEventListener("click", limpiarFormulario);

// función para generar la contraseña
function generarContrasenia(e) {
    e.preventDefault();
    const longitud = parseInt(cantidad.value);
    
    if(!longitudValida(longitud)) return;

    const password = Array.from({ length: longitud }, () => caracteres.charAt(Math.floor(Math.random() * caracteres.length))).join("");
    contrasenia.value = password;
    validarContrasenia(password);
}