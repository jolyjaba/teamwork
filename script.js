let display = document.querySelector(".display");
let buttons = document.querySelectorAll(".buttons input");
let number = "";
let buffer = "";

window.onload = function () {
    for (let button of buttons) {
        button.onclick = function () {
            display.value = "";
            if (this.value === "C" || this.value === "c") {
                display.value = "";
                buffer.length = 0;
                number.length = 0;
            } 
            display.value = number;
        }
    }
}