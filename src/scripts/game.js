class Game {
    constructor(){
        this.pattern = [];
        this.currentAttempt = 1;
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

}

export default Game;