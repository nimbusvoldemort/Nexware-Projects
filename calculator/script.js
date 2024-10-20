let display = document.getElementById('display');
let buttons = document.querySelectorAll('.btn');
let currentInput = '';
let previousInput = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.getAttribute('data-value');

        if (value === 'C') {
            currentInput = '';
            previousInput = '';
            operator = '';
            display.innerText = '';
        } else if (value === '=') {
            if (previousInput && currentInput && operator) {
                currentInput = eval(previousInput + operator + currentInput);
                display.innerText = currentInput;
                previousInput = '';
                operator = '';
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (currentInput) {
                previousInput = currentInput;
                operator = value;
                currentInput = '';
            }
        } else {
            currentInput += value;
            display.innerText = currentInput;
        }
    });
});
