const d = document;

export default function sorteo(btn, selector){

    const obtenerGanador = (selector) => {
        
    }

    d.addEventListener("click", e => {
        if(e.target.matches(btn)){
            let resultado = obtenerGanador(selector);
            alert(resultado);
            console.log(resultado);
        }
    });

}