class ProgressBar {
    constructor(elemento, valorInicial = 0){
        this.valueElem = elemento.querySelector('.progress-bar-value');
        this.fillElem = elemento.querySelector('.progress-bar-fill');

        this.setValue(valorInicial);
    }

}

