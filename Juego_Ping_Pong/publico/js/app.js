let game = function () {
  let time = 50;
  let movement = 20;
  let movementBar = 20;
  let width = document.documentElement.clientWidth - movement;
  let height = document.documentElement.clientHeight - movement;
  let controlGame;
  let player1;
  let player2;

  function start() {
    Infinity();
    controlGame = setInterval(play, time);
  }

  function init() {
    ball.style.left = 0;
    ball.state = 1;
    ball.direction = 1; // right 1, left 2
    player1 = new Object();
    player2 = new Object();
    player1.keyPress = false;
    player1.keyCode = null;
    player2.keyPress = false;
    player2.keyCode = null;
  }

  function stop() {
    clearInterval(controlGame);
    document.body.style.background = "#f00";
  }

  function play() {
    moveBall();
    moveBar();
    checkIfLost();
  }

  function checkIfLost() {
    if (ball.offsetLeft >= width) {
      stop();
      console.log("punto player 1");
    }
    if (ball.offsetLeft <= 0) {
      stop();
      console.log("punto player 2");
    }
  }
};
