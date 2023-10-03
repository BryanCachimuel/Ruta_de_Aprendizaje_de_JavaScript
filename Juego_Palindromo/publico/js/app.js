function palindromo(){
    const text = document.getElementById("text").value
    const smallText = text.toLowerCase().replace(/[\W_]/g, "")

    const reverseText = smallText.split("").reverse().join()

    let respuesta = "";

    if(reverseText === smallText) respuesta = "Es un palíndromo"
    else respuesta = "No es un palíndromo"

    document.getElementById("respuesta").innerHTML = text ? respuesta : ""
}