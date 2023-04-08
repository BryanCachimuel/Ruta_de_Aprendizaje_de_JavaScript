const form = document.querySelector('#form-search');
const moneda = document.querySelector('#moneda');
const criptomoneda = document.querySelector('#criptomonedas');
const formContainer = document.querySelector('.form-side');
const containerAnswer = document.querySelector('.container-answer');

const objBusqueda = {
    moneda: '',
    criptomoneda: ''
}

document.addEventListener('DOMContentLoaded', () => {
    consultarCriptos();

    form.addEventListener('submit', submitForm);
    moneda.addEventListener('change', getValue);
    criptomoneda.addEventListener('change', getValue);
})

function submitForm(e){
    e.preventDefault();
    const {moneda, criptomoneda} = objBusqueda;
    if(moneda === '' || criptomoneda === ''){
        showError('Seleccione ambas monedas...');
        return;
    }
    consultarAPI(moneda, criptomoneda);
}