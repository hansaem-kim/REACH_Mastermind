import Modal from "./scripts/modal.js"

document.addEventListener("DOMContentLoaded", ()=>{
    const modal = new Modal();

    const startButton = document.querySelector("#start-btn");
    startButton.onclick = function() {
        modal.closeModal("welcome-modal");
    }
})
