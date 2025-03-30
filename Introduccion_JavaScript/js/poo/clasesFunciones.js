/* Clases con Funciones */
function Persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function(){
        console.log(`${this.nombre} ${this.edad}`)
    }
}

// instancias de la clase con funciones
const persona1 = new Persona('Adriana',29);
const persona2 = new Persona('Josue',35);

// acceso a los atributos de la clase con funciones
console.log(persona1.nombre)
console.log(persona2.nombre)

// acceso al método imprimir
persona1.imprimir();
persona2.imprimir();
