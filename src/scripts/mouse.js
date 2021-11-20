class Mouse {
    constructor(){
        
    }

    resetCursor() {
        let pointers = document.querySelectorAll('.cursor');
        pointers.forEach(function(pointer) {
            pointer.classList.add("invisible");
        })

    }

    changeCursor(color) {
        this.resetCursor();
        let pointer = document.querySelector(`.${color}`);
        pointer.classList.remove("invisible");

        window.addEventListener("mousemove", cursor);

        function cursor(e) {
            pointer.style.top = e.pageY + 'px';
            pointer.style.left = e.pageX + 'px'
        }
    }
}

export default Mouse;