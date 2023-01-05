function guardarAlmacenamientoLocal(llave, valor_guardar){
    localStorage.setItem(llave, JSON.stringify(valor_guardar))
}

function obtenerAlmacenamientoLocal(llave){
    const datos = JSON.parse(localStorage.getItem(llave))
    return datos
}

let productos = obtenerAlmacenamientoLocal('productos') || []
let contenedor = document.getElementById('contenedor')
window.addEventListener('load', () => {
    for(let i = 0; i < productos.length; i++){
        contenedor.innerHTML += `<div>
                                    <img src="${productos[i].urlImagen}" alt="producto 1">
                                    <div class="informacion">
                                        <p>${productos[i].nombre}</p>
                                        <p class="precio">$${productos[i].valor}</p>
                                        <button>Comprar</button>
                                    </div>
                                </div>`
    }
})

const header = document.querySelector("#header")
const body = document.querySelector("body")
window.addEventListener("scroll", function(){
    if(contenedor.getBoundingClientRect().top < 10){
        header.classList.add("scroll")
    }else{
        header.classList.remove("scroll")
    }
})