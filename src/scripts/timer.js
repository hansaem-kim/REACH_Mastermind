
class Timer{
    constructor(){
        this.second = 0;
        this.minute = 0;
        this.timer;
        this.timeOver = false;

    }

    resetTimer(){
        clearInterval(this.timer);
        let timer = document.querySelector(".timer");
        this.second = 0;
        this.minute = 0;
        timer.innerHTML = `00:00`;
    }

    startTimer(){
        let timer = document.querySelector(".timer");
        let that = this;
        this.timer = setInterval(function(){
            that.second += 1;
            if (that.second===60){
                that.second=0;
                that.minute+=1;
            }
            //ensure the time is in '00:00' format.
            timer.innerHTML = `${('0'+that.minute).slice(-2)}:${('0'+that.second).slice(-2)}`;
        }, 1000);
    }


}

export default Timer;