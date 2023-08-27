let valor = document.getElementById("valor");

// detecto el evento cuando se escribe el número
valor.addEventListener('keyup', convertir);
txtResultado = document.getElementById("resultado");

unidad1 = document.getElementById("unidad1");
/* se detecta el evento cuando se selecciona una unidad */
unidad1.addEventListener('change', convertir);

unidad2 = document.getElementById("unidad2");
/* se detecta el evento cuando se selecciona una unidad */
unidad2.addEventListener('change', convertir);

/* variable donde se calcula el resultado */
let resultado;

