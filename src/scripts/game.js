class Game {
    constructor(){
        this.secretPattern = [];
        this.guess = [];
        this.currentAttempt = 1;
        this.colorValue = {};
        this.colorValue['red'] = 1;
        this.colorValue['blue'] = 2;
        this.colorValue['green'] = 3;

    }

    generatePattern(){
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", 'https://www.random.org/integers/?num=4&min=1&max=8&col=1&base=10&format=plain&rnd=new');
        xmlHttp.send();
        xmlHttp.onreadystatechange=(e=>{
            let stringPattern = xmlHttp.responseText;
            this.pattern = stringPattern.match(/[^\s]+/g);
        });

        // for(let i=0; i<4; i++){
        //     this.pattern[i] = Math.floor(Math.random()*7)+1;
        // }
        // console.log(this.pattern);
    }

    currentGuess(){
        let currentRow = document.getElementsByClassName(`hole ${this.currentAttempt}`);
        for (let i=0; i<4; i++){
            this.guess.push(this.colorValue[currentRow[i].classList[3]]);
        }
    }

    checkPattern(){
        this.currentGuess();
        if (this.guess == this.secretPattern){
            console.log("good");
        } else {
            console.log('bad');
        }
    }

}

export default Game;