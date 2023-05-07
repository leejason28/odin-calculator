function add(x,y) {
    return x+y
}

function subtract(x,y) {
    return x-y
}

function multiply(x,y) {
    return x*y
}

function divide(x,y) {
    return x/y
}

function operate(operator, x, y) {
    switch(operator) {
        case '+':
            return add(x,y)
            break;
        case '-':
            return subtract(x,y)
            break;
        case '*':
            return multiply(x,y)
            break;
        case '/':
            if (y==0) {
                return "Divide by zero error"
            }
            return divide(x,y)
        default:
            return "Enter a valid operator"   
    }
}

/* useful variables */
let num1 = null;
let num2 = null;
let op = null;
const operations = ['+', '-', '*', '/'];
let done = false;

/* for display portion of calculator */
const display = document.querySelector('.display');
display.textContent = ""

/* number buttons */
const buttons = document.querySelector('.buttons');
for (let i=0; i<=9; i++) {
    let btn = document.createElement('button');
    btn.textContent = `${i}`;
    btn.addEventListener('click', () => {
        if (op) {
            if (!num2) {
                num2 = 0;
            } 
            num2 = (num2*10) + i;
            display.textContent = num2;
        } else {
            if (done) {
                num1 = 0;
                done = false;
            }
            num1 = (num1*10) + i;
            display.textContent = num1;
        }
    });
    buttons.appendChild(btn);
}

/* operation buttons */
for (let i=0; i<operations.length; i++) {
    let btn = document.createElement('button');
    btn.textContent = `${operations[i]}`;
    btn.addEventListener('click', () => {
        if (num2) {
            num1 = operate(op, num1, num2);
            num2 = null;
            display.textContent = num1;
        }
        op = `${operations[i]}`;
        /* edge case: user tries to enter another operation */
    });
    buttons.appendChild(btn); 
}

/* clear button */
let clear = document.createElement('button');
clear.textContent = "clear";
clear.addEventListener('click', () => {
    num1 = null;
    num2 = null;
    op = null;
    display.textContent = "";
});
buttons.appendChild(clear);

/* equal button */
let equal = document.createElement('button');
equal.textContent = "=";
/* edge case: pressing = before entering second number */
equal.addEventListener('click', () => {
    num1 = operate(op, num1, num2);
    op = null;
    num2 = null;
    display.textContent = num1;
    done = true;
});
buttons.appendChild(equal);