let cube = document.getElementById("cube");

angleArray = [
  [0, 0, 0],
  [-310, -362, -38],
  [-400, -320, -2],
  [135, -217, -88],
  [-224, -317, 5],
  [-47, -219, -81],
  [-133, -360, -53],
];

cube.addEventListener("click", function (e) {
  cube.style.animation = "animate 1.4s linear";

  const randomAngle = Math.floor(Math.random() * 6) + 1;
  cube.style.transform =
    "rotateX(" +
    angleArray[randomAngle][0] +
    "deg) rotateY(" +
    angleArray[randomAngle][1] +
    "deg) rotateZ(" +
    angleArray[randomAngle][2] +
    "deg)";
  cube.style.transition = "1s linear";

  cube.addEventListener("animationend", function (e) {
    cube.style.animation = "";
  });
});
