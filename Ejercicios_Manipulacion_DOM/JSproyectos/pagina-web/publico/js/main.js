// Configuración inicial de Three.js
const container = document.querySelector("#three-container");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);

// Renderizador con fondo transparente
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize( container.clientWidth, container.clientHeight );
renderer.setClearColor(0x000000, 0);
container.appendChild(renderer.domElement);

// Ambiente de Luz
scene.add(new THREE.AmbientLight(0xffffff, 1));

// Cargador de texturas
const loader = new THREE.TextureLoader();
const textures = [
    "./images/img1.png",
    "./images/img1.png",
    "./images/img1.png",
    "./images/img1.png",
    "./images/img1.png",
    "./images/img1.png"
].map(path => loader.load(path));

// Crear materiales
const materials = textures.map(texture => new THREE.MeshBasicMaterial({
    map: texture, 
    side: THREE.FrontSide, 
    transparent: true, 
    opacity: 1
}));

// Material transparente para caras adicionales
const transparentMaterial = new THREE.MeshBasicMaterial({
    color: 0x000000,
    transparent: true,
    opacity: 0
});

// Crear el cubo y asignar materiales
const cube = new THREE.Mesh(new THREE.BoxGeometry(4.3, 4.3, 4.3),[
    ...materials.slice(0, 3), 
    transparentMaterial, 
    ...materials.slice(3)
]);
scene.add(cube);

// Posición de la cámara
camera.position.z = 5;

// Animación de rotación solo en el eje z
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.z += 0.005;
    renderer.render(scene, camera);
};
animate();

// Cambiar textura
window.imgSlider = function(imagePath) {
    const texture = loader.load(imagePath);
    cube.material.forEach(material => {
        material.map = texture;
        material.needsUpdate = true;
    });
};

// Cambiar color del circulo
window.changeCircleColor = color => document.querySelector(".circle").style.background = color;

// Menu desplegable
function toggleMenu() {
    document.querySelector(".toggle").classList.toggle("active");
    document.querySelector(".navigation").classList.toggle("active");
}