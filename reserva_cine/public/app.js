const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

/* anteponiendo el signo + en movieSelect combierte el tipo de dato de string a number */
let ticketPrice = +movieSelect.value;

/* función para contar el total */
function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    
    const seatsIndex = [...selectedSeats].map(function(seat){
        return [...seats].indexOf(seat);
    })

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
    
    const selectedSeatsCount = selectedSeats.length;
    //console.log(selectedSeatsCount);

    /* capturando el número de asientos seleccionados y mediante ello se calcula el precio de las entradas y su total respectivo */
    count.innerHTML = selectedSeatsCount;
    total.innerHTML = selectedSeatsCount * ticketPrice;
}

/* evento para seleccionar una de las peliculas del select */
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value)
    updateSelectedCount();
})

/* captuta el asiento seleccionado */
container.addEventListener('click', (e) => {

    /* valida que solo se seleccionen los asientos sin ocupar */
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
       
        /* pinta de color cian el asiento al seleccionado y dado click */
        e.target.classList.toggle('selected');
    }

    updateSelectedCount();
})
