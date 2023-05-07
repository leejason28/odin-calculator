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
        case '-':
            return subtract(x,y)
        case '*':
            return multiply(x,y)
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
const onetwothree = document.createElement('div');
const fourfivesix = document.createElement('div');
const seveneightnine = document.createElement('div');
const zero = document.createElement('div');
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
    btn.classList.add('num');
    if (i==0) {
        zero.appendChild(btn);
    } else if (i>0 && i<4) {
        onetwothree.appendChild(btn);
    } else if (i>3 && i<7) {
        fourfivesix.appendChild(btn);
    } else {
        seveneightnine.appendChild(btn);
    }
    buttons.appendChild(onetwothree);
    buttons.appendChild(fourfivesix);
    buttons.appendChild(seveneightnine);
    buttons.appendChild(zero);
}

/* operation buttons */
const opbuttons = document.querySelector('.op-buttons');
for (let i=0; i<operations.length; i++) {
    let btn = document.createElement('button');
    btn.textContent = `${operations[i]}`;
    btn.addEventListener('click', () => {
        if (num2==0 && op=='/') {
            num1 = null;
            num2 = null;
            op = null;
            display.textContent = "Divide by zero error";
        }
        if (num2) {
            num1 = operate(op, num1, num2);
            num2 = null;
            display.textContent = num1;
        }
        op = `${operations[i]}`;
    });
    btn.classList.add('op');
    opbuttons.appendChild(btn);
}

/* for = and clear buttons */
const spbuttons = document.querySelector('.sp-buttons');

/* equal button */
let equal = document.createElement('button');
equal.textContent = "=";
equal.addEventListener('click', () => {
    if (num2 != null) {
        num1 = operate(op, num1, num2);
        op = null;
        num2 = null;
        display.textContent = num1;
        done = true;
    }
});
equal.classList.add('sp');
spbuttons.appendChild(equal);

/* clear button */
let clear = document.createElement('button');
clear.textContent = "clear";
clear.addEventListener('click', () => {
    num1 = null;
    num2 = null;
    op = null;
    display.textContent = "";
});
clear.classList.add('sp');
spbuttons.appendChild(clear);