let textPw = document.querySelector("#pw-text");
let displaySize =  document.querySelector(".display-pw-size span");
let btnGenerate = document.querySelector(".generate");
let clipboard =  document.querySelector(".password a");

let upper = document.querySelector("#upper");
let lower = document.querySelector("#lower");
let number = document.querySelector("#number");
let symbol = document.querySelector("#symbol");

let passwordAll = '';

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";  
const numbers = "0123456789"; 
const symbols = "!@#$%^&*()_+="; 