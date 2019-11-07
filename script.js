let display = document.querySelector(".display");
let buttons = document.querySelectorAll(".buttons input");
let buffer = [];

window.onclick = function () {
    for (let button of buttons) {
        button.onclick = function () {
            switch (this.value) {
                case "=":
                    solve(buffer);
                    break;
                case "+":
                    add();
                    break;
                case "-": 
                    sub();
                    break;
                case "x":
                    mul();
                    break;
                case "/":
                    div();
                    break;
                case "&radic;":
                    sqrt();
                    break;
            }
        }
    }
}

function solve(arr) {
    console.log(arr);
}