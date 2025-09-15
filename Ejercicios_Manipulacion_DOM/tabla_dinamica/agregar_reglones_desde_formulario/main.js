let agregar = document.getElementById("agregar");
let table = document.getElementById("salida");

window.onload = function() {
  
    agregar.addEventListener("click", function() {

        let id = document.getElementById("id").value;
        let producto = document.getElementById("producto").value;
        let cantidad = document.getElementById("cantidad").value;
        let precio = document.getElementById("precio").value;

        agregarRegistro(id, producto, cantidad, precio);

    });
    
}

function agregarRegistro(id, producto, cantidad, precio) {
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

    table.appendChild(r);
}