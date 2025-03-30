const persona = {
    nombres: 'BL',
    apellidos: 'CL',
    edad: 30,
    genero: 'masculino',

    // definiendo un método
    nombreCompleto(){
        return `Nombre completo: ${this.nombres} ${this.apellidos}`
    },

    // listas
    hobbies : ['futbol','redes sociales', 'aprender'],

    // objeto anidado
    ubicacion: {
        continente: 'América',
        pais: 'Ecuador',
        region: 'Sierra' 
    }
}

// acceso al objeto con todos sus atributos
console.log(persona)

// acceso al atributo nombre del objeto
console.log(persona.nombres)

// acceso al método del objeto
console.log(persona.nombreCompleto())

// accesoa a la lista
console.log(persona.hobbies)

// acceso al objeto anidado
console.log(persona.ubicacion)

// acceso a uno de los atributos del objeto anidado
console.log(persona.ubicacion.pais)