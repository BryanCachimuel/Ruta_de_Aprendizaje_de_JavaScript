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

getUsuarios()