class Persona {
    /* 
    Propiedades cuando se tiene un constructor es innecesario ponerlas aparte
    nombre;
    edad;
    */

    // en caso de que una propiedad solo sea utilizada en la clase se la puede agregar aquí
    genero;
    
    // constructor
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    // métodos
    imprimir(){
        console.log(this.nombre, this.edad)
    }
}

// instancia de la clase
const persona1 = new Persona('Anita',32)
const persona2 = new Persona('Michelle',31)
/*
asignación de datos a las propiedades de la clase 
esto se hace cuando no se tiene un constructor en la clase
persona1.nombre = 'Anita';
persona1.edad = 32;
*/

// impresión de los datos ingresados
persona1.imprimir()
persona2.imprimir()