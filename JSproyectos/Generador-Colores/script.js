const rRange = document.getElementById("rRanger")
const gRange = document.getElementById("gRanger")
const bRange = document.getElementById("bRanger")
const colorDisplay = document.getElementById("colorDisplay")
const rgbValue = document.getElementById("rgbValue")

function updateColor() {
    const r = rRange.value;
    const g = gRange.value;
    const b = bRange.value;

    const rgbStr = `RGB(${r}, ${g}, ${b})`;
    colorDisplay.style.backgroundColor = rgbStr
    rgbValue.textContent = rgbStr
}

rRange.addEventListener("input", updateColor)
gRange.addEventListener("input", updateColor)
bRange.addEventListener("input", updateColor)

const copyButton = document.getElementById("copyButton")

copyButton.addEventListener(("click"), ()=> {
    navigator.clipboard.writeText(rgbValue.textContent)
    .then(() => {
        alert('Color copiado al portapapeles')
    })

    .catch(err => {
        console.log('Error al copiar el texto', err)
        alert('No se pudo copiar el color')
    })
})