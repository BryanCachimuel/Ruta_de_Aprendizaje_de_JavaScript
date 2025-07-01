/* Selección de Elementos */
const textInput = document.querySelector(".text-input");
const botonGenerar = document.querySelector(".btn-generar");
const contenedorQR = document.querySelector(".qrcode");
const botonDescargar = document.querySelector(".btn-descargar");
const aviso = document.querySelector(".text-aviso");

let QR;

/* Principal */
botonGenerar.addEventListener("click", e => {
    e.preventDefault();
    const texto = textInput.value;
    
    if(!texto) {
        mostrarAviso("No has ingresado ningun texto.");
    } else {
        generarCodigoQr(texto);
        botonDescargar.style.display = "block";
    }
});

botonDescargar.addEventListener("click", () => {
    descargarCodigoQr();
});

function generarCodigoQr(texto) {
    if(QR) {
        QR.clear();
    }

    QR = new QRious({
        value: texto,
        size: 228
    });

    contenedorQR.innerHTML = "";
    contenedorQR.appendChild(QR.image);
}

function descargarCodigoQr() {
    if(QR) {
        const qrImageData = QR.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = qrImageData;
        link.download = "codigo_qr.png";
        link.click();
    }
}

function mostrarAviso(mensaje) {
    aviso.style.color = "#f83292";
    aviso.style.background = "none";
    aviso.style.fontWeight = "800";
    aviso.textContent = mensaje;
    aviso.style.visibility = "visible";

    setTimeout(() => {
        aviso.style.display = "none";
    }, 4000);
 }

 