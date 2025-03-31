/* clase Padre */
class Persona {

    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    detallePersona(){
        console.log(`Nombre: ${this.nombre}\n Edad: ${this.edad}`)
    }
}

/* Clase Hija */
class Empleado extends Persona {
    sueldo;

    constructor(nombre, edad, sueldo){
        super(nombre, edad);
        this.sueldo = sueldo;
    }

    detallePersona(){
        console.log(`Nombre: ${this.nombre}\n Edad: ${this.edad}\n Sueldo: ${this.sueldo}`)
    }
}

const empleado1 = new Empleado('NCCC',31,950)
empleado1.detallePersona()