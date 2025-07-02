let progressCircular = document.querySelector(".progress-circular");
let btn = document.querySelector("button");
let inp = document.querySelector("input");
let value = document.querySelector(".value");
let mensaje = document.querySelector(".texto-aviso");
let start = 0;

btn.addEventListener("click", bar);

function bar() {

  let texto = mensaje.value;

  let progress = setInterval(() => {

    if (!texto) {
      mostrarAviso("No se ha ingresado ningun valor");
    }

    if (start < inp.value) {
      start++;
      progressEND();
    } else {
      start--;
      progressEND();
    }

    function progressEND() {
      value.textContent = `${start}%`;
      progressCircular.style.background = `conic-gradient(#00a6ff ${start * 3.6
        }deg, #ededed 0deg)`;
      //console.log(start);
      if (start == inp.value) {
        clearInterval(progress);
        inp.value = "";
      }
    }
  }, 50);
}

function mostrarAviso(msg) {
  mensaje.style.color = "#ff0000";
  mensaje.style.background = "none";
  mensaje.style.fontWeight = "800";
  mensaje.textContent = msg;
  mensaje.style.visibility = "visible";

  setTimeout(() => {
    mensaje.style.display = "none";
  }, 4000);
}

