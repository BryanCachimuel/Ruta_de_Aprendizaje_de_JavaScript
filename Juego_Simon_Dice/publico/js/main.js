const round = document.getElementById('round');
const simonButtons = document.getElementById('square');
const startButton = document.getElementById('startButton');

class Simon {
    constructor(simonButtons, startButton, round){
        this.round = 0;
        this.userPosition = 0;
        this.totalRounds = 10;
        this.sequence = [];
        this.speed = 1000;
        this.blockedButtons = true;
        this.buttons = Array.from(simonButtons);
        this.display = {
            startButton,
            round
        }
        this.errorSound = new Audio('./publico/sounds/error.wav');
        this.buttonSounds = [
            new Audio('./publico/sounds/1.mp3'),
            new Audio('./publico/sounds/2.mp3'),
            new Audio('./publico/sounds/3.mp3'),
            new Audio('./publico/sounds/4.mp3'),
        ]
    }
}