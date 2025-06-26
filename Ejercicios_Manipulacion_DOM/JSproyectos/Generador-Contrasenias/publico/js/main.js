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

