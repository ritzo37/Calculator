let methods = {

    "+": function (a, b) {
        return (a + b) % 1 == 0 ? a+b : (a+b).toFixed(2);
    },

    "-": function (a, b) {
        return (a - b) % 1 == 0 ? a-b : (a-b).toFixed(2);
    },

    "*": function (a, b) {
        return (a * b) % 1 == 0 ? a*b : (a*b).toFixed(2);
    },

    "/": function (a, b) {
        return (a / b) % 1 == 0 ? a/b : (a/b).toFixed(2);
    }

}


let num1 = undefined;
let num2 = undefined;
let op;

function populatePrevDisplay(num1,num2,op) {
     string  = num1 + " " + op + " " + num2 ; 
     prevDisplay.textContent = string ;
}

function clearPreviousDisplay() {
     prevDisplay.textContent = "" ;
}

function operate(num1, num2, op) {
    let result = methods[op](num1, num2);

    let tempString = String(result);
    console.log(result);
    if (tempString.length>12){
        result = result.toExponential(2);
    }
   
    return result;
}


const buttonsList = document.querySelectorAll('.button');
const display = document.querySelector('.display');
const clear = document.querySelector('.clear');
const operators = document.querySelectorAll('.operator');
const equalTo = document.querySelector('.equal');
const deleteBtn = document.querySelector('.del');
const prevDisplay = document.querySelector('.prevDisplay');
const dot = document.querySelector('.dot');

let input = "";
buttonsList.forEach((button) => {
    button.addEventListener('click', (event) => {
        
        if (input.length<=9) {
        input += (event.target.innerText);
        display.textContent = input;
        }
    })
})

clear.addEventListener('click', () => {
    input = "";
    num1 = undefined;
    num2 = undefined;
    display.textContent = " ";
    clearPreviousDisplay() ;
})

operators.forEach((operator) => {
    operator.addEventListener('click', (event) => {
        
        if (num1 == undefined && input.length) {
            num1 = +(input);
            input = "";
        }

        else if (num1!=undefined && num2 == undefined && input.length) {
            num2 = +(input);
            input = "";
        }


        if (((num1==0) || num1) && num2 === 0 && op == "/") {
            display.textContent = "Just don't !";
            num1 = undefined;
            num2 = undefined;
            input = "";
            clearPreviousDisplay() ;
        }

        else if (num1 && num2 && op) {
            let tempResult = operate(num1, num2, op);
            display.textContent = tempResult;
            populatePrevDisplay(num1,num2,op);
            num1 = tempResult;
            num2 = undefined;
            input = "";
            op = undefined;
        }

        op = event.target.textContent;
    })
})

equalTo.addEventListener('click', () => {

    if (num1 != undefined && input.length)  {
        num2 = +(input); 
    }
    if (num2 == 0 && (num1 || (num1==0)) && op == '/') {
        display.textContent = "Just don't !";
        num1 = undefined;
        num2 = undefined;
        input = "";
        clearPreviousDisplay() ;
    }
    else if (num1 != undefined && num2 != undefined && input.length) {
        let tempResult = operate(num1, num2, op);
        display.textContent = tempResult;
        populatePrevDisplay(num1,num2,op);
        num1 = undefined;
        input = String(tempResult);
        num2 = undefined;
        op = undefined;
        
    }
})

deleteBtn.addEventListener('click',()=>{
       let inputString = input ; 
       let len = inputString.length ; 
       let newString = input.substring(0,len-1);
       input = newString ; 
       display.textContent = input ;
})

dot.addEventListener('click',()=>{
      let currInput = input ; 
      let currInputArr = currInput.split('.');
      if (currInputArr.length==1) {
      input+=".";
      display.textContent=input ;
      }
})