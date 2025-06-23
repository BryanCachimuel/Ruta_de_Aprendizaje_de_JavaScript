function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value)
    const height = parseFloat(document.getElementById("height").value) / 100

    if(weight && height) {
        const bmi = (weight / (height * height)).toFixed(2)
        document.getElementById("result").style.color = '#0854c7'
        document.getElementById("result").textContent = `Tu BMI es ${bmi}`
    }else {
        document.getElementById("result").style.color = '#eb0909'
        document.getElementById("result").textContent = `Introduce Valores Validos`
    }

    borrarCampos()
}

function borrarCampos() {
    document.getElementById("weight").value = ''
    document.getElementById("height").value = ''
}