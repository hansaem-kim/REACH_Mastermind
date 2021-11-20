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
        mouse.changeCursor("red-cursor");
    }

    blueButton.onclick = function() {
        mouse.changeCursor("blue-cursor");
    }

    greenButton.onclick = function() {
        mouse.changeCursor("green-cursor");
    }

})
