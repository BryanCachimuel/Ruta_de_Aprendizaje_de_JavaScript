let datos = new Array();
const formato = new Intl.NumberFormat('es-ec', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
});

window.onload = function () {

    let agregar = document.getElementById("agregar")

    agregar.addEventListener("click", function () {

        let id = document.getElementById("id").value;
        let producto = document.getElementById("producto").value;
        let cantidad = document.getElementById("cantidad").value;
        let precio = document.getElementById("precio").value;
        let registro = {
            id: id,
            producto: producto,
            cantidad: cantidad,
            precio: precio
        };
        datos.push(registro);

        agregarRegistro(datos);

    });

}

function agregarRegistro(datos) {
    let tabla = document.getElementById("salida");
    let renglones = tabla.getElementsByTagName("tr");
    let totalCantidad = totalTotal = 0;

    // limpiar la tabla
    for (let x = renglones.length - 1; x > 0; x--) {
        tabla.removeChild(renglones[x]);
    }

    // llenar tabla
    datos.forEach(d => {
        let c = parseInt(d.cantidad);
        let p = parseInt(d.precio);
        let t = c * p;

        let r = document.createElement("tr");

        let td = document.createElement("td");
        td.innerText = d.id;
        r.appendChild(td);

        td = document.createElement("td");
        td.innerText = d.producto;
        r.appendChild(td);

        td = document.createElement("td");
        td.innerText = c;
        r.appendChild(td);

        td = document.createElement("td");
        td.innerText = p;
        r.appendChild(td);

        td = document.createElement("td");
        td.innerText = t;
        r.appendChild(td);

        tabla.appendChild(r);

        totalCantidad += c;
        totalTotal += t;
    });

    r = document.createElement("tr");

    td = document.createElement("td");
    td.innerText = "";
    r.appendChild(td);

    td = document.createElement("td");
    td.innerText = "Total:";
    r.appendChild(td);

    td = document.createElement("td");
    td.innerText = totalCantidad;
    r.appendChild(td);

    td = document.createElement("td");
    td.innerText = "";
    r.appendChild(td);

    td = document.createElement("td");
    td.innerText = totalTotal;
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