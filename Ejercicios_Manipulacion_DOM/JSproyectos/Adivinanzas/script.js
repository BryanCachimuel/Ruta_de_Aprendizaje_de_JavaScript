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

  {
    question: "¿Cómo se denomina a un perro con fiebre?",
    answer: "hot dog",
  },

  {
    question: "Siempre va por la tierra sin ensuciarse. ¿Qué es?",
    answer: "la sombra",
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

function checkAnswer() {
    const userAnswer = document.getElementById("answer-input").value.toLowerCase()

    if(userAnswer === currentRiddle.answer) {
        document.getElementById('result').innerText = '¡Correcto!'
        document.getElementById('result').style.color = 'green'
        document.getElementById('answer-input').value = ''
        correctAnswer++;
        document.getElementById("correctCount").innerText = correctAnswer

        loadNewRiddle()

    } else {
        document.getElementById('result').innerText = '¡Intentalo de nuevo!'
        document.getElementById('result').style.color = 'red'
        document.getElementById('answer-input').value = ''
    }
}
