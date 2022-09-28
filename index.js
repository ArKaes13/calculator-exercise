function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(operator, x, y) {
    x = Number(x);
    y = Number(y);

    if (operator == '+') {
        return add(x, y);
    } else if ( operator == '-') {
        return subtract(x, y);
    } else if (operator == 'x') {
        return multiply(x, y);
    } else {
        if (y == 0) {
            alert('You cannot divide by zero!')
            return null;
        } else {
            return divide(x, y);
        }
    }
}

let firstOperand = '';
let secondOperand = '';
let operation = '';

const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const displayBottom = document.querySelector('.display-bottom');
const displayTop = document.querySelector('.display-top');
const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete');

numberButtons.forEach( (button) => {
    button.addEventListener('click', () => {
        if (displayBottom.textContent === '0') {
            displayBottom.textContent = '';
        }
        displayBottom.textContent += button.textContent;
    });
});

operatorButtons.forEach( (button) => {
    button.addEventListener('click', () => {
        if (operation == '') {
            operation = button.textContent;
        }
        if (firstOperand == '') {
            if (secondOperand != '') {
                firstOperand = secondOperand;
                secondOperand = ''
            }
            firstOperand = displayBottom.textContent;
            displayTop.textContent = `${firstOperand} ${operation}`;
            displayBottom.textContent = '';
        } else {
            secondOperand = displayBottom.textContent;
            displayBottom.textContent = operate(operation, firstOperand, secondOperand);
            displayTop.textContent = '';
            firstOperand = '';
            secondOperand = displayBottom.textContent;
            operation = '';
        }
    })
});

clearButton.addEventListener('click', () => {
    firstOperand = '';
    secondOperand = '';
    operation = '';
    displayTop.textContent = '';
    displayBottom.textContent = 0;
});

deleteButton.addEventListener('click', () => {
    displayBottom.textContent = displayBottom.textContent.slice(0, -1);
});


