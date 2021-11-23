class Modal {
    constructor(){

    }

    closeModal(modal){
        const popup = document.querySelector(`#${modal}`);
        const background = document.querySelectorAll("body > div:not(.modal)");
        popup.style.display = 'none';
        background.forEach (ele=>{
            ele.classList.remove("filter");
        });
        
    }

    openModal(modal){
        const popup = document.querySelector(`#${modal}`);
        const background = document.querySelectorAll("body > div:not(.modal)");
        popup.style.display = 'flex';
        background.forEach (ele=>{
            ele.classList.add("filter");
        });

    }

}

export default Modal;