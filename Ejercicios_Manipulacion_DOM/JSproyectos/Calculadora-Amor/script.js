function calcularAmor(){
    const nombre1 = document.getElementById("nombre1").value
    const nombre2 = document.getElementById("nombre2").value
    
    if(nombre1 && nombre2){
        const hash = (nombre1 + nombre2).split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
        const amorPorcentaje = hash % 101
        document.getElementById("resultados").style.color = 'green'
        document.getElementById("resultados").textContent = `❤❤❤ ${nombre1} tienes un ${amorPorcentaje}% de compatibilidad con ${nombre2} ❤❤❤`
    }
    else{
        document.getElementById("resultados").style.color = 'red'
        document.getElementById("resultados").textContent = 'Ingrese ambos nombres por favor'
    }
}