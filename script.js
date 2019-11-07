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
            } else if (this.value === "0" || this.value === "1" ||
                this.value === "2" || this.value === "3" ||
                this.value === "4" || this.value === "5" ||
                this.value === "6" || this.value === "7" ||
                this.value === "8" || this.value === "9") {
                number += this.value;
            } else {
                buffer += number;
                number = "";
                
                
                
                
                
            display.value = number;
            
        }
    }
}
