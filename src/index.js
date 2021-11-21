import Game from "./scripts/game.js";
import Modal from "./scripts/modal.js"
import Mouse from "./scripts/mouse.js";

document.addEventListener("DOMContentLoaded", ()=>{
    const modal = new Modal();
    const game = new Game();
    const mouse = new Mouse();

    game.generatePattern();

    const startButton = document.querySelector("#start-btn");
    const checkButton = document.querySelector(".check-btn");
    const redButton = document.querySelector(".red-peg");
    const blueButton = document.querySelector(".blue-peg");
    const greenButton = document.querySelector(".green-peg");
    
    startButton.onclick = function() {
        modal.closeModal("welcome-modal");
    };

    //Remove the peg on cursor when mouse is over the check button.
    checkButton.onmouseover = function() {
        mouse.resetCursor();
    };

    checkButton.onclick = function() {
        game.checkPattern();
    };



    //Attach the peg on cursor. Users can see which peg they are placing.
    redButton.onclick = function() {
        mouse.changeCursor("red");
    };

    blueButton.onclick = function() {
        mouse.changeCursor("blue");
    };

    greenButton.onclick = function() {
        mouse.changeCursor("green");
    };

    //Place the peg on each hole.
    const holes = document.querySelectorAll(".hole");
    holes.forEach(function(hole){
        hole.onclick = function() {
            if(hole.classList[1] == game.currentAttempt){
                hole.classList.add(`${mouse.currentColor}`);
                hole.style.backgroundColor = mouse.currentColor;
            }
        }
    });



})
