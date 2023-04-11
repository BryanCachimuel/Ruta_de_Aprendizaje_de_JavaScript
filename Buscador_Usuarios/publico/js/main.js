const btnSearch =  document.querySelector(".search-section a");
const inputUser =  document.querySelector(".search-section input");
const mainContainer =  document.querySelector(".main-wraper");
const containerSection =  document.querySelector(".container-section");

const url = "https://api.github.com/users/";

btnSearch.addEventListener("click", buscarUser);

function buscarUser(e){
    e.preventDefault();

    if (inputUser.value === "") {
        mostrarError("Escriba un user de GitHub...");
        return;
    }
    callApiUser(inputUser.value);
}