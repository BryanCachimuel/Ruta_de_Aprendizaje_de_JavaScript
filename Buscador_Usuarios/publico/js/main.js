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

async function callApiUser(user){
    const userUrl = url + user;
    const repoUrl = `${url}${user}/repos`;
    try {
        const data = await Promise.all([fetch(userUrl), fetch(repoUrl)]);
        if (data[0].status === 404) {
            mostrarError("No existe el usuario...");
            return;
        }
        const dataUser = await data[0].json();
        const dataRepo = await data[1].json();
        //console.log(dataUser);
        //console.log(dataRepo);
        mostrarData(dataUser);
        mostrarRepos(dataRepo);
    } catch (error) {
        console.log(error);
    }

}