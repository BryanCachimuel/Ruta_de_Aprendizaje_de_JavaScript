let agregar = document.getElementById("agregar");

window.onload = function() {
  
    agregar.addEventListener("click", function() {

        let id = document.getElementById("id").value;
        let producto = document.getElementById("producto").value;
        let cantidad = document.getElementById("cantidad").value;
        let precio = document.getElementById("precio").value;

        agregarRegistro(id, producto, cantidad, precio);

    });
    
}