let display = document.querySelector(".display");
let buttons = document.querySelectorAll(".buttons input");

window.onload = function () {
    for (let button of buttons) {
        button.onclick = function () {
                this.value === "2" || this.value === "3" ||
                this.value === "4" || this.value === "5" ||
                this.value === "6" || this.value === "7" ||
                this.value === "8" || this.value === "9") {
                display.value += this.value;
            } else {
                if (this.value === "C" || this.value === "c") {
                    display.value = "";
                } else if (this.value === "x") {
                    display.value += this.value;
                } else if (this.value === "√") {
                    display.value += "**0.5";
                } else if (this.value === "π") {
                    display.value += "3.14";
                } else if (this.value === "=") {
                    display.value = display.value ? eval(display.value) : "";
                } else if (this.value === ".") {
                    display.value += ".";
                } else {
                    display.value += this.value;
                }
            }
        }
    }
}
