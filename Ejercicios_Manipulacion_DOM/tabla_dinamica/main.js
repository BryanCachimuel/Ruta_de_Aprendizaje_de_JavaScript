
window.onload = function () {
    let alumnos = new Array(5);
    alumnos[0] = { id: 1, nombre: "Ronaldo Narario", calificacion: 8 };
    alumnos[1] = { id: 2, nombre: "Leonel Messi", calificacion: 7 };
    alumnos[2] = { id: 3, nombre: "Moises Caicedo", calificacion: 9 };
    alumnos[3] = { id: 4, nombre: "Cristiano Ronaldo", calificacion: 10 };
    alumnos[4] = { id: 5, nombre: "Willian Pacho", calificacion: 10 };

    let tabla = document.getElementById("alumnos");
    let registros = document.createElement("tbody");

    alumnos.forEach(a => {
        let r = document.createElement("tr");

        let td = document.createElement("td");
        td.innerText = a.id;
        r.appendChild(td);

        td = document.createElement("td");
        td.innerText = a.nombre;
        r.appendChild(td);

        td = document.createElement("td");
        td.innerText = a.calificacion;
        r.appendChild(td);

        registros.appendChild(r);

    });

    tabla.appendChild(registros);
}
