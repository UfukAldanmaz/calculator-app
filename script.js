const buttons = document.querySelectorAll(".num");
const input = document.querySelector(".input");
const result = document.querySelector(".result");
let num1 = null;
let num2 = null;
let operator = null;
const operators = ["+", "-", "*", "/"];

buttons.forEach(item => {
    item.addEventListener("click", calc)
})

function calc() {
    let userInput = this.value;

    if (userInput == "AC") {
        input.value = "";
        result.value = 0;
        operator = null;
        num1 = null;
        num2 = null;
        return;
    }

    else if (userInput == "DEL") {
        input.value = input.value.substr(0, input.value.length - 1);
        return;
    }

    else if (operators.includes(userInput)) {
        input.value = null;
        num1 = operate(num1, num2, operator);
        result.value = num1;
        operator = userInput;
        num2 = null;
    }

    else if (userInput == "=") {
        input.value = null;
        num1 = operate(num1, num2, operator);
        result.value = num1;
    }

    else if (userInput == "%") {

        if (num2 !== null) {
            result.value = input.value / 100;
            input.value = null;
            num2 = null;
        }
        else {
            result.value = result.value / 100;
        }
    }

    else if (userInput == "+/-") {
        if (num2 !== null) {
            input.value = input.value * -1;
        }
    }

    else if (userInput == ".") {
        if (!input.value.includes(".")) {
            input.value += userInput;
        }
    }

    else {
        input.value += userInput;
        num2 = Number(input.value);
        input.value = num2;
        return;
    }

}

function operate(a, b, operator) {

    if (operator === "+") {
        return a + b;
    }
    else if (operator === "-") {
        return a - b;
    }
    else if (operator === "*") {
        return a * b;
    }
    else if (operator === "/") {
        if (b === 0) {
            return "Infinity";
        } else {
            return a / b;
        }
    } else {
        return b;
    }
}


///SUBSTRİNG EVAL BİNLER YÜZLER BASAMAĞI NOKTA İŞLEM ÖNCELİĞİ PARANTEZ
// function userInput(btn) {
//     document.form.inp.value = document.form.inp.value + btn;
// }

// (
//     function () {
//         let buttons = document.querySelectorAll(".num");
//         let userInput = document.querySelector(".userInput");

//         buttons.forEach(function (button) {
//             button.addEventlistener("click", function (e) {
//                 let btnVal = e.target.dataset.num;
//                 userInput.value += btnVal;
//             })

//         });
//     })();

// function userInput() {
//     let numberOne = document.getElementById("number1", "number2").value;
//     document.getElementById("result").innerHTML = numberOne; //ikiden fazla hane eklemeli
// }

// document.getElementById("number1", "number2").addEventListener("click", function () {
//     userInput();
// })

// document.getElementById("add").addEventListener("click", function () {
//     add();
// })

// function add() {
//     let addition = Number(document.getElementById("add").value);
//     document.getElementById("user-input").value = "";
// }
// console.log(add(5, 10));