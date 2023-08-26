/* cantidad de leyendas para graficar */
let cantidadLeyendas;

/* arreglo que guardará los pares de elementos que se insertaran en el grafico */
let arregloDatos = [];

/* función para agregar las leyendas que se necesite para graficar */
const agregarDato = () => {
    // tomando la cantidad de leyendas actuales
    cantidadLeyendas = document.getElementsByClassName("dato").length;
    cantidadLeyendas++;

    // div nuevo que contendra las nuevas leyendas
    const dato = document.createElement("div");
    dato.className = "dato";

    // se crea el input con sus propiedades y clases
    const inputLeyenda = document.createElement("input");
    inputLeyenda.type = "text";
    inputLeyenda.className = "serie";
    inputLeyenda.placeholder = "Leyenda" + cantidadLeyendas;

    // se agrega el input al div datos
    dato.appendChild(inputLeyenda);
    document.getElementById("datos").appendChild(dato);

    // creo el input para el valor y le asigno sus propiedades y clases
    const inputValor = document.createElement("input");
    inputValor.type = "text";
    inputValor.className = "valor";
    inputValor.placeholder = "Valor" + cantidadLeyendas;

    // agrego el input al div datos
    dato.appendChild(inputValor);
    document.getElementById("datos").appendChild(dato);
}

/* función para cargar el gráfico de Google */
const cargarGrafico = () => {
    google.charts.load('current', {
        'packages':['corechart']
    });
    google.charts.setOnLoadCallback(drawChart);
}