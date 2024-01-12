$(document).ready(function(){

    /* Manejar el click para el boton de agregar producto al carrito */
    $("#catalogo").on("click",".agregar", function(){
        let producto = $(this).closest("li").data("producto");
        let precio = $(this).closest("li").data("precio");
        agregarAlCarrito(producto, precio);
        calcularTotal();
    });

    /* función para agregar un producto */
    function agregarAlCarrito(producto, precio){
        let nuevoItem = $("<li>").data("producto", producto).data("precio", precio);
        nuevoItem.append('<span>Producto ' + producto + '</span>');
        nuevoItem.append('<button class="eliminar">Eliminar</button>');
        $("#carrito ul").append(nuevoItem);
    }
});
