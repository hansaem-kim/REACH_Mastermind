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

        // for(let i=0; i<4; i++){
        //     this.pattern[i] = Math.floor(Math.random()*7)+1;
        // }
        // console.log(this.pattern);
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

        //for the guess & secret code pattern, change the number to 0 to indicate that it's already used.
        for (let i=0; i<4; i++){
            if (this.guess[i] == this.secretPattern[i]){
                perfectGuess += 1;
                this.guess[i]=0;
                this.secretPattern[i]=0;
            }
        }

        for (let i=0; i<4; i++){
            if (this.guess[i] == 0) continue;
            for (let j=0; j<4; j++){
                if (this.guess[i] == this.secretPattern[j]){
                    okayGuess += 1;
                    this.secretPattern[j] = 0;
                    break;
                }
            }
        }
    }

    checkPattern(){
        this.currentGuess();
        console.log(this.secretPattern);
        console.log(this.guess);
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