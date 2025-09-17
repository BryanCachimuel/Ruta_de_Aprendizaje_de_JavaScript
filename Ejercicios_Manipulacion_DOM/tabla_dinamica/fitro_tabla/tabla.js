function filtro() {
    let entrada, tabla, tr, td, i, txtValor;
    
    entrada = document.getElementById("entrada");
    filtro = entrada.value.toUpperCase();

    tabla = document.getElementById("misLibros");

    // obtenemos todas las etiquetas de tipo tr
    tr = tabla.getElementsByTagName("tr");
}