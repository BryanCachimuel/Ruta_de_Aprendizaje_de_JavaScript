window.onload = function() {

    let agregar = document.getElementById("agregar")

    agregar.addEventListener("click", function() {

        let id = document.getElementById("id").value;
        let producto = document.getElementById("producto").value;
        let cantidad = document.getElementById("cantidad").value;
        let precio = document.getElementById("precio").value;

        agregarRegistro(id, producto, cantidad, precio);

    });
    
}

function agregarRegistro(id, producto, cantidad, precio) {
    let tabla = document.getElementById("salida");
    let r = document.createElement("tr");

    let td = document.createElement("td");
    td.innerText = id;
    r.appendChild(td);

    td = document.createElement("td");
    td.innerText = producto;
    r.appendChild(td);

    td = document.createElement("td");
    td.innerText = cantidad;
    r.appendChild(td);

    td = document.createElement("td");
    td.innerText = precio;
    r.appendChild(td);

    tabla.appendChild(r);

    borrarValores();
}

function borrarValores() {
    document.getElementById("id").value = "";
    document.getElementById("producto").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("precio").value = "";
}