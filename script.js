let methods = {

    "+": function (a, b) {
        return a + b;
    },

    "-": function (a, b) {
        return a - b;
    },

    "*": function (a, b) {
        return a * b;
    },

    "/": function (a, b) {
        return (a / b).toFixed(2);
    }

}

let num1 = 0;
let num2 = 0;
let op;
let result = false;


function operate(num1, num2, op) {
    return methods[op](num1, num2);
}


const buttonsList = document.querySelectorAll('.button');
const display = document.querySelector('.display');
const clear = document.querySelector('.clear');
const operators = document.querySelectorAll('.operator');
const equalTo = document.querySelector('.equal');

let input = 0;
buttonsList.forEach((button) => {
    button.addEventListener('click', (event) => {

        display.textContent = " ";
        input = input * 10 + +(event.target.innerText);
        display.textContent = input;

    })
})

clear.addEventListener('click', () => {
    input = 0;
    num1 = 0;
    num2 = 0;
    display.textContent = " ";
})

operators.forEach((operator) => {
    operator.addEventListener('click', (event) => {

        if (!num1) {
            num1 = input;
            input = 0;
        }

        else if (!num2 && input) {
            num2 = input;
            input = 0;
            result = false ;
        }


        if (num1 && num2) {
            display.textContent = operate(num1, num2, op);
            num1 = operate(num1, num2, op);
            num2 = 0;
            input = 0 ;
        }

        op = event.target.innerText;

    })
})

equalTo.addEventListener('click', () => {

      if (num1 && input) {
        num2 = input;
        display.textContent = operate(num1, num2, op);
        num1 = operate(num1, num2, op);
        num2 = 0;
        input = 0;
    }
})

