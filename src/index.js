import Game from "./scripts/game.js";
import Modal from "./scripts/modal.js"

document.addEventListener("DOMContentLoaded", ()=>{
    const modal = new Modal();
    const game = new Game();

    const startButton = document.querySelector("#start-btn");
    game.generatePattern();
    startButton.onclick = function() {
        modal.closeModal("welcome-modal");
    }
})
