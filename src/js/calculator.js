import { Operation } from "./operation.js";

// display field
const display = document.querySelector('.display');

// Create calculator object
const calc = new Operation();

// key pad event handler
const btns = document.getElementsByClassName('btn');
for (let i = 0; i < btns.length; ++i) {
    const btn = btns[i];
    const btnValue = btns[i].innerText;
    const checkCondition = () => {
        const prev = display.value;
        if (calc.isOperatorAttached || calc.afterView) {
            display.value = '0';
            calc.isOperatorAttached = false;
            calc.afterView = false;
        }
        return prev;
    };

    // number pad handler
    if (!isNaN(parseInt(btnValue))) {
        btn.addEventListener('click', e => {
            checkCondition();
            let current = display.value;
            current += e.target.innerText;
            if (current.includes('.') && e.target.innerText === '0') {
                display.value = current;
            } else {
                display.value = parseFloat(current);
            }
        });
    }

    // float point handler
    else if (btnValue === '.') {
        btn.addEventListener('click', e => {
            checkCondition();
            const current = display.value;
            if (!current.includes('.'))
                display.value += e.target.innerText;
        });
    }

    // positive and negative number
    else if (btnValue === '+/-') {
        btn.addEventListener('click', () => {
            display.value = checkCondition();
            if (display.value.includes('-')) {
                display.value = display.value.substr(1);
            } else if (parseFloat(display.value) !== 0) {
                display.value = '-'.concat(display.value);
            }
        });
    }

    // operator handler
    else if (['+', '-', '*', '/'].includes(btnValue)) {
        btn.addEventListener('click', () => {
            calc.currentOperator = btnValue;
            if (!calc.isOperatorAttached) {
                calc.setCounter(parseFloat(display.value));
                display.value = calc.counter;
                calc.isOperatorAttached = true;
            }
        });
    }

    // result handler
    else if (btnValue === '=') {
        btn.addEventListener('click', () => {
            calc.setCounter(parseFloat(display.value));
            display.value = calc.counter;
            calc.reset();
        });
    }

    // 'C' clear display handler
    else if (btnValue === 'C') {
        btn.addEventListener('click', () => display.value = '0');
    }

    // 'AC' clear display and reset counter handler
    else {
        btn.addEventListener('click', () => {
            display.value = '0';
            calc.reset();
        });
    }
}