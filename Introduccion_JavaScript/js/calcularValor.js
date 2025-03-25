let valorProducto = prompt('Ingrese un valor para el producto')

let iva = (parseFloat(valorProducto) * 0.19).toFixed(2);
let total = parseFloat(valorProducto) + parseFloat(iva);

let valorTotal = total.toFixed(2)

document.writeln("Precio sin IVA: ", valorProducto, "<br>")
document.writeln("Valor IVA: ", iva, "<br>");
document.writeln("Precio Total: ", valorTotal);