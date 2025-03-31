class Matematicas {
    static #pi = 3.141516

    static get PI(){
        return this.#pi
    }

    static suma(a, b){
        return a + b;
    }
}

console.log(Matematicas.PI)
console.log(Matematicas.suma(8,9))