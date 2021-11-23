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
    };

    openModal(modal){
        const popup = document.querySelector(`#${modal}`);
        const background = document.querySelectorAll("body > div:not(.modal)");
        popup.style.display = 'flex';
        background.forEach (ele=>{
            ele.classList.add("filter");
        });
    };

    shake(){
        const gameboard = document.querySelector(".gameboard");
        let time = 0;
        const shaking = setInterval(()=> {
            gameboard.style.top = `${Math.random()*5}px`;
            gameboard.style.left = `${Math.random()*5}px`;

            time += 1;

            if (time == 50) {
                clearInterval(shaking);
                gameboard.style.top = '0px';
                gameboard.style.left = '0px';
            } 

        }, 5);

    }

}

export default Modal;