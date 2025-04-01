/* Utilización de setTimeout */
/*setTimeout(() => {
    console.log('Esto aparece despues de 3 segundos')
}, 3000);

// JavaScript Asíncrono
const segundo = () => {
    setTimeout(() => {
        console.log('Llamada a Segundo')
    }, 2000);
}

const primero = () => {
    console.log('Llamada a Primero')
    segundo()
    console.log('Fin de Primero')
}

primero()*/

const getUsuarios = () => {
    setTimeout(() => {
        const userIDs = [101, 102, 103, 104];
        console.log(userIDs);

        setTimeout((id) => {
            const usuario = {
                email: 'catr@gmail.com',
                nombre: 'Cristoper'
            }
            console.log(`${id} - ${usuario.email} - ${usuario.nombre}`)
        }, 1500, userIDs[1]);

        setTimeout((idPermiso) => {
            const persomisos = ['admin','creador']
            console.log(persomisos)
        }, 1500, userIDs[2]);

    }, 1500);
}

//getUsuarios()

// De Callbacks a Promesas
const getUsuariosIDs = new Promise((response, reject) => {
    setTimeout(() => {
        response([101, 102, 103, 104])
    }, 1500)
});

getUsuariosIDs.then(IDs => {
    console.log(IDs)
})

// Ejemplo de Promesas
let promesa = new Promise((resolve, reject) => {
    if (true) {
        resolve('La operación fue exitosa')
    } else {
        reject('Hubo un error')
    }
});

promesa.then(response => {
    console.log('Response: ' + response)
}).catch( error => {
    console.log('Error: ' + error)
})

// Ejemplo 2
let miPromesa = Promise.resolve('Comida');
miPromesa.then(resp => console.log(resp))

//Ejemplo 3
let miPromesa2 = new Promise(function(resolve, reject){
    setTimeout(() => resolve(4), 2000)
})

miPromesa2.then(resp => {
    resp += 5;
    console.log(resp)
})