const btnLeft  = document.querySelector(".btn-left");
const btnRight  = document.querySelector(".btn-right");
const slider = document.querySelector("#slider");
const sliderSection  = document.querySelectorAll(".slider-section");

btnLeft.addEventListener("click", e => moveToLeft());
btnRight.addEventListener("click", e => moveToRight());

