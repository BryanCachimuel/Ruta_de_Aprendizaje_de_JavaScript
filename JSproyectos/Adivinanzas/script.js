const riddles = [
  {
    question: "Se mira pero no se toca. ¿Qué es?",
    answer: "espejo",
  },

  {
    question: "Blanco por dentro, verde por fuera. Si quieres que te lo diga, espera. ¿Qué es?",
    answer: "pera",
  },

  {
    question: "¿Qué tiene llaves pero no abre puertas?",
    answer: "piano",
  },
];

let currentRiddle;
let correctAnswer = 0;

function loadNewRiddle() {
  currentRiddle = riddles[Math.floor(Math.random() * riddles.length)];
  document.getElementById("riddle").innerText = currentRiddle.question;
}

document.addEventListener("DOMContentLoaded", function () {
  loadNewRiddle();
});
