/* Configuración inicial de three.js */
const container = document.querySelector("#three-container");
const scene = new THREE.Scene();
const camera = new THREE.perspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);