let banderas = ["pa.svg", "bo.svg", "ad.svg", "gb.svg", "na.svg"];
let correcta = [2,2,1,1,0];
let opciones = [];

//cargo en el arreglo opciones las opciones a mostrar en cada jugada
opciones.push(["SUDAFRICA", "SINGAPUR", "PANAMA"]);
opciones.push(["PERU", "ITALIA", "BOLIVIA"]);
opciones.push(["TUNEZ", "ANDORRA", "ANTIGUA Y BARBUDA"]);
opciones.push(["UCRANIA", "REINO UNIDO", "MADAGASCAR"]);
opciones.push(["NAMIBIA", "OMAN", "ETIOPIA"]);

//variable que guarda la posicion actual
let posActual = 0;

//variable que guarda la cantidad acertadas hasta el moemento
let cantidadAcertadas = 0;