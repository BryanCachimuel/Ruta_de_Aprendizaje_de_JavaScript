class Diplay{

    constructor(displayValorAnterior, displayValorActual){
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculadora = new Calculadora();
        /* estas dos variables son distintas a la variables que se manejan en el display */
        this.valorActual = '';
        this.valorAnterior = '';
    }

    agregarNumero(numero){
        this.valorActual = numero;
    }

}