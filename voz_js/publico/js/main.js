const contenido = document.querySelector('.contenido')
const btnGrabarTexto = document.querySelector('.btn-grabar')
/* Primero creamos los objetos para poder grabar nuestra voz con el microfono */
const reconocimientoVoz = window.SpeechRecognition || window.webkitSpeechRecognition
const reconocimiento = new reconocimientoVoz()
/* metodo que se ejecuta al empezar a granar */
reconocimiento.onstart = ()=>{
    contenido.innerHTML = 'Estamos grabando la voz...'
}
/* Metodo que se ejecuta al terminar la grabación */
reconocimiento.onresult = event =>{
    let mensaje = event.results[0][0].transcript
    contenido.innerHTML = mensaje
    leerTextoCondicionado(mensaje)
}