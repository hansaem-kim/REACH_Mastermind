import Game from "./scripts/game.js";
import Modal from "./scripts/modal.js"
import Mouse from "./scripts/mouse.js";

document.addEventListener("DOMContentLoaded", ()=>{
    const modal = new Modal();
    const game = new Game();
    const mouse = new Mouse();

    const colorValue = {};
    colorValue['tomato'] = '1';
    colorValue['lightskyblue'] = '2';
    colorValue['green'] = '3';
    colorValue['khaki'] = '4';
    colorValue['purple'] = '5';
    colorValue['orange'] = '6';
    colorValue['pink'] = '7';
    colorValue['teal'] = '8';

    game.generatePattern();

    const startButton = document.querySelector(".start-btn");
    const newGameButtons = document.querySelectorAll(".new-game-btn");
    const checkButton = document.querySelector(".check-btn");

    const redButton = document.querySelector(".tomato-peg");
    const blueButton = document.querySelector(".lightskyblue-peg");
    const greenButton = document.querySelector(".green-peg");
    const khakiButton = document.querySelector(".khaki-peg");
    const purpleButton = document.querySelector(".purple-peg");
    const orangeButton = document.querySelector(".orange-peg");
    const pinkButton = document.querySelector(".pink-peg");
    const tealButton = document.querySelector(".teal-peg");
    
    startButton.onclick = function() {
        modal.closeModal("welcome-modal");
        game.setupBoard();
    };

    newGameButtons.forEach(btn => {
        btn.onclick = function() {
            game.reset();
            console.log('new game')
        }
    });

    //Remove the peg on cursor when mouse is over the check button.
    checkButton.onmouseover = function() {
        console.log(game.secretPattern);
        mouse.resetCursor();
    };

    checkButton.onclick = function() {
        game.checkPattern();
    };

    //Attach the peg on cursor. Users can see which peg they are placing.
    redButton.onclick = function() {
        mouse.changeCursor("tomato");
    };
    blueButton.onclick = function() {
        mouse.changeCursor("lightskyblue");
    };
    greenButton.onclick = function() {
        mouse.changeCursor("green");
    };
    khakiButton.onclick = function() {
        mouse.changeCursor("khaki");
    };
    purpleButton.onclick = function() {
        mouse.changeCursor("purple");
    };
    orangeButton.onclick = function() {
        mouse.changeCursor("orange");
    };
    pinkButton.onclick = function() {
        mouse.changeCursor("pink");
    };
    tealButton.onclick = function() {
        mouse.changeCursor("teal");
    };

    //Place the peg on each hole.
    const holes = document.querySelectorAll(".hole");
    holes.forEach(function(hole){
        hole.onclick = function() {
            if(hole.classList[1] == game.currentAttempt){
                hole.classList.add(`${mouse.currentColor}`);
                hole.style.backgroundColor = mouse.currentColor;
                hole.insertAdjacentHTML('afterbegin', colorValue[`${mouse.currentColor}`])
            }
        }
    });



})
