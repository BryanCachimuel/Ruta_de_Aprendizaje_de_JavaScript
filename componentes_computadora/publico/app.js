$(document).ready(function(){

    /* Manejar el click para el boton de agregar producto al carrito */
    $("#catalogo").on("click",".agregar", function(){
        let producto = $(this).closest("li").data("producto");
        let precio = $(this).closest("li").data("precio");
        agregarAlCarrito(producto, precio);
        calcularTotal();
    });

});