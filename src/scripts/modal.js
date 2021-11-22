class Modal {
    constructor(){

    }

    closeModal(modal){
        const popup = document.querySelector(`#${modal}`);
        popup.style.display = 'none'
        
    }

    openModal(modal){
        const popup = document.querySelector(`#${modal}`);
        popup.style.display = 'flex'

    }

}

export default Modal;