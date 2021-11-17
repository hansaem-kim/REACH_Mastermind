class Modal {
    constructor(){

    }

    closeModal(modal){
        const popup = document.querySelector(`#${modal}`);
        popup.classList.add("invisible-modal");
        popup.classList.remove("visible-modal");

    }

}

export default Modal;