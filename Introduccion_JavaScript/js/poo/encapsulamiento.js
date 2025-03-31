class Persona {

    // para indicar que es una propiedad privada se pone #
    #nombre;
    #edad;

    constructor(nombre, edad){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#metodoPrivado()
    }

    /* propiedades (que hacen de métodos dentro de la clase) get y set para acceder a las propiedades de la clase */
   set setNombre(nombre){
    this.#nombre = nombre;
   }

   get getNombre(){
    return $this.#nombre;
   }

   set setEdad(edad){
    this.#edad = edad;
   }

   get getEdad(){
    return $this.#edad;
   }

   // se puede crear métodos privados mediante el #
   #metodoPrivado(){
    console.log('Método Privado')
   }
}

const persona1 = new Persona('Marilud', 28);
console.log(persona1.getNombre)
persona1.setNombre = 'Evelin'
console.log(persona1)
