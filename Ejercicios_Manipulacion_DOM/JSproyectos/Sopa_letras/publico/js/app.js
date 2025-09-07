/* Variables */
 var palabras = ["tortuga","gato","perro", "abeja", "perico", "tigre", "venado", "zorrillo", "ballena", "pantera", "oveja","cocodrilo","caballo","dinosaurio","escarabajo","rinoceronte","leopardo","jirafa","elefante","hipopotamo","unicornio","serpiente","gacela","mapache","chimpance","gorila","burro","zebra","leon","hormiga","manati","orangutan","mosquito","gallina","conejo","koala","tecolote"]; 
 var game = {c:15, r:15, letras:[], numPalabras:25, palabras:[], seleccionadas:[]};
 var b,a;

 window.onload = function() {
 	crearTablero();
 	anexarPalabras();
 	completarTablero();
 	listarPalabras();
 	encabezado();
 }
 /* Funciones */
 function crearTablero() {
 	var i = 0;
    for (var r = 0; r < game.r; r++) {
        for (var c = 0; c < game.c; c++) {
           b = document.createElement("div");
           b.innerText = "*";
           a = document.createAttribute("id");
           a.value = "celda-"+c+"-"+r;
           b.setAttributeNode(a);
           //
           a = document.createAttribute("class");
           a.value = "celda";
           b.setAttributeNode(a);
           //
           b.addEventListener("click",(e)=>{
            var id = e.target.id;
            var partes = id.split("-");
            var i = parseInt(partes[2])*game.c+parseInt(partes[1]);
            var verifica = {ok:0, palabra:""};
            game.seleccionadas[i] = true;
            game.palabras.forEach((w)=>{
               if(w.posicion.includes(i)){
                  verifica.ok++;
                  verifica.palabra = w.palabra;
               }
            });
            if(verifica.ok){
               document.getElementById(id).style.backgroundColor = "yellow";
            } else {
               document.getElementById(id).style.backgroundColor = "pink";
            }
            verificarPalabras();
           },false);
           //
           document.getElementById("tablero").appendChild(b);
           //
           game.letras.push({r:r, c:c, i:i, letra:"*"});
           //
           i++;
        }
    }
    console.log(game.letras);
 }
 function verificarPalabras() {
   game.palabras.forEach((w,i)=>{
      let verifica = 0;
      game.seleccionadas.forEach((val,ii)=>{
         if(w.posicion.includes(ii)){
            verifica++;
         }
      });
      if (verifica==w.palabra.length) {
         document.getElementById(w.palabra).style.color="red";
         document.getElementById(w.palabra).style.textDecoration = "line-through";
         w.encontrada = true;
      }
   });
   encabezado();
 }


function anexarPalabras() {
 	palabras = palabras.sort(()=>Math.random() - 0.5);
   //
   for (var i = 0; i < game.numPalabras; i++) {
      ok = anadirPalabra(palabras[i].toUpperCase());
      if (ok) {
         game.palabras.push({
            palabra:palabras[i].toUpperCase(),
            posicion: ok,
            encontrada: false
         });
      }
   }
   console.log(game.palabras);
 }

 function anadirPalabra(palabra) {
    var palabra_array = palabra.split("");
    palabra_array = (Math.random()>0.5)?palabra_array:palabra_array.reverse();
    var ok = false;
    var tope = 300;
    while(!ok && tope > 0){
      tope--;
      let pos = {col:0, row:0};
      let dir = (Math.random()>0.5)?true:false;
      if (dir && palabra_array.length<=game.c) {
         //palabra horizontal
         pos.col = coordenada(palabra_array.length, game.c);
         pos.row = Math.floor(Math.random()*game.r);
         ok = verificaPalabraX(pos,palabra_array);
      } else if(!dir && palabra_array.length<=game.r){
         //palabra vertical
         pos.row = coordenada(palabra_array.length, game.r);
         pos.col = Math.floor(Math.random()*game.c);
         ok = verificaPalabraY(pos,palabra_array);
      }
    }
    return ok;
 }

 function verificaPalabraY(pos, palabra) {
    let inicio = (pos.row*game.c)+pos.col;
    let contador = 0;
    let posicion = [];
    //busqueda
    for (var i = 0; i < palabra.length; i++) {
       if(game.letras[inicio+(i*game.c)].letra=="*"){
         contador++;
       }
    }
    if (contador==palabra.length) {
      for (var i = 0; i < palabra.length; i++) {
         if (game.letras[inicio+(i*game.c)].letra=="*") {
            game.letras[inicio+(i*game.c)].letra = palabra[i];
            var id="celda-"+game.letras[inicio+(i*game.c)].c+"-"+game.letras[inicio+(i*game.c)].r;
            document.getElementById(id).innerText = palabra[i];
            posicion.push(inicio+(i*game.c));
         }
      }
      return posicion;
    }
    return false;
 }

 function verificaPalabraX(pos, palabra) {
    let inicio = (pos.row*game.c)+pos.col;
    let contador = 0;
    let posicion = [];
    //busqueda
    for (var i = 0; i < palabra.length; i++) {
       if(game.letras[inicio+i].letra=="*"){
         contador++;
       }
    }
    if (contador==palabra.length) {
      for (var i = 0; i < palabra.length; i++) {
         if (game.letras[inicio+i].letra=="*") {
            game.letras[inicio+i].letra = palabra[i];
            var id="celda-"+game.letras[inicio+i].c+"-"+game.letras[inicio+i].r;
            document.getElementById(id).innerText = palabra[i];
            posicion.push(inicio+i);
         }
      }
      return posicion;
    }
    return false;
 }
 
 function coordenada(lon,c) {
    return Math.floor(Math.random()*(c-lon+1));
 }
 
 function completarTablero() {
   var id;
 	for (var i = 0; i < game.letras.length; i++) {
     if(game.letras[i].letra == "*"){
      game.letras[i].letra=letraAleatoria();
      id = "celda-"+game.letras[i].c+"-"+game.letras[i].r;
      document.getElementById(id).innerText = game.letras[i].letra;
     }
   }
 }
 function letraAleatoria() {
    let ascii = Math.floor(Math.random()*26)+65;
    return String.fromCharCode(ascii);
 }

 function listarPalabras() {
   var d,a;
   for (var i = 0; i < game.palabras.length; i++) {
     d = document.createElement("div");
     d.innerText = game.palabras[i].palabra;
     //
     a = document.createAttribute("id");
     a.value = game.palabras[i].palabra;
     d.setAttributeNode(a);
     //
     document.getElementById("palabras").appendChild(d);
   }
 }
 function encabezado() {
 	game.aciertos = 0;
   game.palabras.forEach((w,i)=>{
      if (w.encontrada) {
         game.aciertos++;
      }
   });
   var faltan = game.palabras.length - game.aciertos;
   if (faltan==0) {
      document.getElementById("mensaje").innerText = "Felicidades";
   } else {
      document.getElementById("mensaje").innerText = "Encuentra las siguientes "+faltan+" palabras";
   }
 }