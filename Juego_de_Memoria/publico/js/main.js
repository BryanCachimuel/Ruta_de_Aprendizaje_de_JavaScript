class Memorama {
    constructor(){
        this.canPlay = false;

        this.card1 = null;
        this.card2 = null;

        this.availableImages = [16, 7, 102, 103];
        this.orderForThisRound = [];
        this.cards = Array.from(document.querySelectorAll(".board-game figure"));

        this.maxPairNumber = this.availableImages.length;

        this.startGame();
    }

    startGame(){
        this.foundPairs = 0;
        this.setNewOrder();
        this.setImagesInCards();
        this.openCards();
    }

    setNewOrder(){
        this.orderForThisRound = this.availableImages.concat(this.availableImages);
        this.orderForThisRound.sort( () => Math.random() - 0.5 );
    }
}