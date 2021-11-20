class Mouse {
    constructor(){
        this.currentColor;
    }

    resetCursor() {
        let pointers = document.querySelectorAll('.cursor');
        pointers.forEach(function(pointer) {
            pointer.classList.add("invisible");
        })

    }

    changeCursor(color) {
        this.currentColor = color;
        this.resetCursor();
        let pointer = document.querySelector(`.${color}-cursor`);
        pointer.classList.remove("invisible");

        window.addEventListener("mousemove", cursor);

        function cursor(e) {
            pointer.style.top = e.pageY + 'px';
            pointer.style.left = e.pageX + 'px'
        }
    }

}

export default Mouse;