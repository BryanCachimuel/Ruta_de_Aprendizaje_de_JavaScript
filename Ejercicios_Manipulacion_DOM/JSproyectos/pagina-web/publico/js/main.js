// Configuración inicial de Three.js
const container = document.querySelector("#three-container");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);

// Renderizador con fondo transparente
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize( container.clientWidth, container.clientHeight );
renderer.setClearColor(0x000000, 0);
container.appendChild(renderer.domElement);

/* Ambiente de luz */
scene.add(new THREE.AmbienteLight(0xffffff, 1));

/* Cargador de texturas */
const loader = new THREE.TextureLoader();
const textures = [
    "./images/img1.png",
    "./images/img1.png",
    "./images/img1.png",
    "./images/img1.png",
    "./images/img1.png",
    "./images/img1.png",
].map(path => loader.load(path));

