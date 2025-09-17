function filtro() {
    let entrada, tabla, tr, td, i, txtValor;
    
    entrada = document.getElementById("entrada");
    filtro_txt = entrada.value.toUpperCase();

    tabla = document.getElementById("misLibros");

    // obtenemos todas las etiquetas de tipo tr
    tr = tabla.getElementsByTagName("tr");

    for (let i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if(td) {
            txtValor = td.textContent || td.innerText;
            if(txtValor.toUpperCase().indexOf(filtro_txt) > -1) {
                tr[i].style.display = "";
            }else {
                tr[i].style.display = "none";
            }
        }
    }
}