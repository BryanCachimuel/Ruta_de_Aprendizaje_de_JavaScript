function guardarAlmacenamientoLocal(llave, valor_guardar){
    localStorage.setItem(llave, JSON.stringify(valor_guardar))
}

/* función para recuperar los datos que hemos almacenado */
function obtenerAlmacenamientoLocal(llave){
    const datos = JSON.parse(localStorage.getItem(llave))
    return datos
}

let productos = obtenerAlmacenamientoLocal('productos') || [];
let mensaje = document.getElementById('mensaje')

/* Añadir un producto */
const añadirProducto = document.getElementById('productoAñadir')
const añadirValor = document.getElementById('valorAñadir')
const añadirExistencia = document.getElementById('existenciaAñadir')
const añadirImagen = document.getElementById('ImagenAñadir')

document.getElementById("botonAñadir").addEventListener("click", function(even){
    even.preventDefault()
    let productoAñadir = añadirProducto.value
    let valorAñadir = añadirValor.value
    let existenciaAñadir = añadirExistencia.value
    let imagenAñadir = añadirImagen.value

    let van = true

    if(productoAñadir == '' || valorAñadir == '' || existenciaAñadir == '' || imagenAñadir == ''){
        mensaje.classList.add('llenarCampos')
        setTimeout(() => {
            mensaje.classList.remove('llenarCampos')
        }, 2500)
        van = false
    }else{
        for(let i = 0; i < productos.length; i++){
            if(productos[i].nombre == productoAñadir){
                mensaje.classList.add('repetidoError')
                setTimeout(() => {
                    mensaje.classList.remove('repetidoError')
                }, 2500)
                van = false
            }
        }
    }

    if(van == true){
        productos.push({
            nombre: productoAñadir,
            valor: valorAñadir,
            existencia: existenciaAñadir,
            urlImagen: imagenAñadir
        })
        mensaje.classList.add('realizado')
        setTimeout(() => {
            mensaje.classList.remove('repetidoError')
            window.location.reload()
        }, 1500)
    }

    guardarAlmacenamientoLocal('productos', productos) 
})

/* Editar un producto */
const productoEd = document.getElementById('productoEditar')
const atributoEd = document.getElementById('atributoEditar')
const nuevoAtributoEd = document.getElementById('nuevoAtributo')

document.getElementById("botonEditar").addEventListener("click", function(event){
    event.preventDefault()
    let productoEditar = productoEd.value
    let atributoEditar = atributoEd.value
    let nuevoAtributo = nuevoAtributoEd.value

    let van = false

    if(productoEditar == '' || atributoEditar == '' || nuevoAtributo == ''){
        mensaje.classList.add('llenarCampos')
        setTimeout(() => {
            mensaje.classList.remove('llenarCampos')
        }, 2500)
    }else{
        for(let i = 0; i < productos.length; i++){
            if(productos[i].nombre == productoEditar){
                productos[i][atributoEditar] = nuevoAtributo
                van = true
            }
        }

        if(van == true){
            mensaje.classList.add('realizado')
            setTimeout(() => {
                mensaje.classList.remove('realizado')
                window.location.reload()
            }, 1500)
        }else{
            mensaje.classList.add('noExisteError')
            setTimeout(() => {
                mensaje.classList.remove('noExisteError')
            }, 2500)
        }

        guardarAlmacenamientoLocal('productos', productos)
    }
})

/* Eliminar */
const productoE = document.getElementById('productoEliminar')

document.getElementById("botonEliminar").addEventListener("click", function(event){
    event.preventDefault()
    let productoEliminar = productoE.value
    let van = false

    for(let i = 0; i < productos.length; i++){
        if(productos[i].nombre == productoEliminar){
            productos.splice(i, 1)
            van = true
        }
    }

    if(van == false){
        mensaje.classList.add('noExsiteError')
        setTimeout(() => {
            mensaje.classList.remove('noExsiteError')
        }, 2500)
    }else{
        mensaje.classList.add('realizado')
        setTimeout(() => {
            mensaje.classList.remove('realizado')  
            window.location.reload()
        }, 1500);
    }
    guardarAlmacenamientoLocal('productos', productos)
})
