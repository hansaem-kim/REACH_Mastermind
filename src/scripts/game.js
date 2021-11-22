class Game {
    constructor(){
        this.secretPattern = [];
        this.guess = [];
        this.currentAttempt = 1;
        this.colorValue = {};
        this.colorValue['red'] = '1';
        this.colorValue['blue'] = '2';
        this.colorValue['green'] = '3';
        this.colorValue['khaki'] = '4';
        this.colorValue['purple'] = '5';
        this.colorValue['orange'] = '6';
        this.colorValue['pink'] = '7';
        this.colorValue['teal'] = '8';

    }

    generatePattern(){
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", 'https://www.random.org/integers/?num=4&min=1&max=8&col=1&base=10&format=plain&rnd=new');
        xmlHttp.send();
        xmlHttp.onreadystatechange=(e=>{
            let stringPattern = xmlHttp.responseText;
            this.secretPattern = stringPattern.match(/[^\s]+/g);
        });
    }

    currentGuess(){
        this.guess = [];
        let currentRow = document.getElementsByClassName(`hole ${this.currentAttempt}`);
        for (let i=0; i<4; i++){
            this.guess.push(this.colorValue[currentRow[i].classList[2]]);
        }
    }

    giveFeedback(){
        //perfectGuess is for correct number & correct spot.
        //okayGuess is for correct number but incorrect spot.
        let perfectGuess = 0;
        let okayGuess = 0;
        let dummyCode = [];
        let dummyGuess = [];

        for (let i=0; i<4; i++){
            dummyGuess[i] = this.guess[i];
            dummyCode[i] = this.secretPattern[i];
        }

        //for the guess & secret code pattern, change the number to 0 to indicate that it's already used.
        for (let i=0; i<4; i++){
            if (dummyGuess[i] == dummyCode[i]){
                perfectGuess += 1;
                dummyGuess[i]=0;
                dummyCode[i]=0;
            }
        }

        for (let i=0; i<4; i++){
            if (dummyGuess[i] == 0) continue;
            for (let j=0; j<4; j++){
                if (dummyGuess[i] == dummyCode[j]){
                    okayGuess += 1;
                    dummyCode[j] = 0;
                    break;
                }
            }
        }

        let feedbackHoles = document.getElementsByClassName(`feedback-hole ${this.currentAttempt}`)
        for (let i=0; i<perfectGuess; i++){
            feedbackHoles[i].style.backgroundColor = 'red';
        }
        for (let i=perfectGuess; i<perfectGuess+okayGuess; i++){
            feedbackHoles[i].style.backgroundColor = 'white';
        }
    }

    checkPattern(){
        this.currentGuess();
        this.giveFeedback();

        if (JSON.stringify(this.guess) === JSON.stringify(this.secretPattern)){
            console.log("good");
        } else {
            console.log('bad');
            this.currentAttempt += 1;
            console.log(this.currentAttempt);
        }
    }

}

export default Game;