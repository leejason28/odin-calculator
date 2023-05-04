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
            return divide(x,y)
        default:
            return "Enter a valid operator"   
    }
}

/* useful variables */
let num1;
let num2;
let op;
const operations = ['+', '-', '*', '/'];

/* for display portion of calculator */
const display = document.querySelector('.display');
display.textContent = "0"

/* creates buttons for calculator */
const buttons = document.querySelector('.buttons');
for (let i=0; i<=9; i++) {
    let btn = document.createElement('button');
    btn.textContent = `${i}`;
    /* add event listener for clicks */
    buttons.appendChild(btn);
}
for (o of operations) {
    let btn = document.createElement('button');
    btn.textContent = o;
    /* add event listener for clicks */
    buttons.appendChild(btn); 
}
let clear = document.createElement('button');
clear.textContent = "clear";
/* add event listener for clicks */
buttons.appendChild(clear);