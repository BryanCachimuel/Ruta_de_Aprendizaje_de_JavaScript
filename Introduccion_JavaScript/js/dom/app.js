console.log(document.querySelectorAll('div'))

// cambiando el dato puesto en el título de la pestaña
document.querySelector('title').innerText = 'DOM'

// Ingresando en el dom dentro del body un mensaje
document.querySelector('body').innerHTML = '<h1>Saludos desde JavaScript</h1>'

// Obtener una clase definida 
document.querySelectorAll('.caja')
document.getElementsByClassName('caja')

// Obtener por id definida en una etiqueta
document.querySelector('#caja1')
document.getElementById('caja1')

// Manipular un elemento mediante el uso de variables
let caja1 = document.querySelector('#caja1')

// crear un elemento dentro de documento
let btn = document.createElement('button')
caja1.append(btn)
btn.innerText = 'Boton'

// agregar una clase al boton creado
btn.classList.add('btn')