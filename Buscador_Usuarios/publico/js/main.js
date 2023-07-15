/* variables principales del ejercicio */
const btnSearch = document.querySelector(".search-section a");
const inputUser = document.querySelector(".search-section input");
const mainContainer = document.querySelector(".main-wraper");
const containerSection = document.querySelector(".container-section");

/* consumiendo el api de github donde se puede acceder a los nombres de los perfiles de github */
const url = "https://api.github.com/users/";

btnSearch.addEventListener("click", buscarUser);

/* función para buscar usuarios */
function buscarUser(e) {
  e.preventDefault();

  if (inputUser.value === "") {
    mostrarError("Escriba un user de GitHub...");
    return;
  }
  callApiUser(inputUser.value);
}

async function callApiUser(user) {
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

    mostrarData(dataUser);
    mostrarRepos(dataRepo);
  } catch (error) {
    console.log(error);
  }
}

function mostrarRepos(repos) {
  const reposContainer = document.querySelector(".link-repos");
  repos
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 10)
    .forEach((element) => {
      const link = document.createElement("a");
      link.innerText = element.name;
      link.href = element.html_url;
      link.target = "_blank";
      reposContainer.appendChild(link);
    });
}

function mostrarError(mensaje) {
  const mensajeNuevo = "Warning: " + mensaje;
  const error = document.createElement("h5");
  error.innerText = mensajeNuevo;
  error.style.color = "red";
  mainContainer.appendChild(error);
  setTimeout(() => error.remove(), 3000);
}

function clearHTML() {
  containerSection.innerHTML = "";
}
