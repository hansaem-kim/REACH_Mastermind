class Modal {
    constructor(){

    }

    closeModal(modal){
        const popup = document.querySelector(`#${modal}`);
        popup.classList.add("invisible-modal");
        popup.classList.remove("visible-modal");

    }

    openModal(modal){
        const popup = document.querySelector(`#${modal}`);
        popup.classList.remove("invisible-modal");
        popup.classList.add("visible-modal");

    }

}

export default Modal;