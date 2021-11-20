import Game from "./scripts/game.js";
import Modal from "./scripts/modal.js"
import Mouse from "./scripts/mouse.js";

document.addEventListener("DOMContentLoaded", ()=>{
    const modal = new Modal();
    const game = new Game();
    const mouse = new Mouse();

    const startButton = document.querySelector("#start-btn");
    const redButton = document.querySelector(".red-peg");
    const blueButton = document.querySelector(".blue-peg");
    const greenButton = document.querySelector(".green-peg");
    
    startButton.onclick = function() {
        modal.closeModal("welcome-modal");
    };

    game.generatePattern();

    redButton.onclick = function() {
        mouse.changeCursor("red");
    }

    blueButton.onclick = function() {
        mouse.changeCursor("blue");
    }

    greenButton.onclick = function() {
        mouse.changeCursor("green");
    }

    const holes = document.querySelectorAll(".hole");
    holes.forEach(function(hole){
        hole.onclick = function() {
            if(hole.classList[1] == game.currentAttempt){
                hole.style.backgroundColor = mouse.currentColor;
            }
        }
    })

})
