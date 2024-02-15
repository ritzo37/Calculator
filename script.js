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


let num1 = undefined;
let num2 = undefined;
let op;




function operate(num1, num2, op) {
    let result = methods[op](num1, num2);
    return result;
}


const buttonsList = document.querySelectorAll('.button');
const display = document.querySelector('.display');
const clear = document.querySelector('.clear');
const operators = document.querySelectorAll('.operator');
const equalTo = document.querySelector('.equal');

let input = "";
buttonsList.forEach((button) => {
    button.addEventListener('click', (event) => {

        input += (event.target.innerText);
        display.textContent = input;

    })
})

clear.addEventListener('click', () => {
    input = "";
    num1 = undefined;
    num2 = undefined;
    display.textContent = " ";
})

operators.forEach((operator) => {
    operator.addEventListener('click', (event) => {
        console.log("start 1 " + num1);
        console.log("start 2 " + num2);

        if (num1 == undefined && input.length) {
            num1 = +(input);
            input = "";
        }

        else if (num1 && num2 == undefined && input.length) {
            num2 = +(input);
            input = 0;
        }


        if (num1 && num2 === 0 && op == "/") {
            display.textContent = "Just don't !";
            num1 = undefined;
            num2 = undefined;
            input = "";
        }

        else if (num1 && num2 && op) {
            let tempResult = operate(num1, num2, op);
            display.textContent = tempResult;
            num1 = tempResult;
            num2 = undefined;
            input = "";
            op = undefined;
        }

        console.log(num1);
        console.log(num2);

        op = event.target.textContent;

        console.log("end 1 " + num1);
        console.log("end 2 " + num2);
    })
})

equalTo.addEventListener('click', () => {

    if (num1 != undefined && input.length) num2 = +(input);
    if (num2 == 0 && num1 && op == '/') {
        display.textContent = "Just don't !";
        num1 = undefined;
        num2 = undefined;
        input = "";
    }
    else if (num1 != undefined && num2 != undefined && input.length) {
        let tempResult = operate(num1, num2, op);
        display.textContent = tempResult;
        num1 = undefined;
        input = String(tempResult);
        num2 = undefined;
        op = undefined;
    }



})

