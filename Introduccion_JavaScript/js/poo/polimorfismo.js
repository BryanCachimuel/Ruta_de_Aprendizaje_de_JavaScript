class Persona {

    constructor(nombre, edad){
        this._nombre = nombre;
        this._edad = edad;
    }

    detallePersona(){
        console.log(`Nombre: ${this._nombre}\n Edad: ${this._edad}`)
    }
}

class Desarrollador extends Persona {
    constructor(nombre, edad, lenguaje){
        super(nombre, edad);
        this.lenguaje = lenguaje;
    }

    /* este es el caso de polimorfismo donde se sobreescribe el método y se le agrega las propiedades de la clase hija */
    detallePersona(){
        super.detallePersona()
        console.log(`Lenguaje de Programación: ${this.lenguaje}`)
    }
}

const nuevoDesarrollador = new Desarrollador('Pamela',29,'Python')
nuevoDesarrollador.detallePersona()