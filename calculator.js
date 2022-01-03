// operation and counter
class Operation {
    counter = null;
    currentOperator = null;
    isOperatorAttached = false;

    setCounter = (inputNumber) => {
        if (this.counter === null) {
            this.counter = inputNumber;
        }
    };

    reset = () => {
        this.counter = null;
        this.currentOperator = null;
        this.isOperatorAttached = false;
    };
}

// display field
const display = document.querySelector('.display');

// Create calculator object
const calc = new Operation();

// key pad event handler
const btns = document.getElementsByClassName('btn');
for (let i = 0; i < btns.length; ++i) {
    const btn = btns[i];
    const btnValue = btns[i].innerText;

    // number pad handler
    if (!isNaN(parseInt(btnValue))) {
        btn.addEventListener('click', e => {
            let current = display.innerText;
            current += e.target.innerText;
            if (current.includes('.') && e.target.innerText === '0') {
                display.innerText = current;
            } else {
                display.innerText = parseFloat(current);
            }
        });
    }

    // float point handler
    else if (btnValue === '.') {
        btn.addEventListener('click', e => {
            const current = display.innerText;
            if (!current.includes('.'))
                display.insertAdjacentText('beforeend', e.target.innerText);
        });
    }

    // operator handler
    else if (['+', '-', '*', '/'].includes(btnValue)) {
        btn.addEventListener('click', e => {
            calc.currentOperator = btnValue;
            if (!calc.isOperatorAttached) {
                calc.setCounter(parseFloat(display.innerText));
                display.innerText = calc.counter;
            }
        });
    }

    // result handler
    else if (btnValue === '=') {
        btn.addEventListener('click', () => {
            calc.setCounter(parseFloat(display.innerText));
            display.innerText = calc.counter;
            calc.reset();
        });
    }

    // 'C' clear display handler
    else if (btnValue === 'C') {
        btn.addEventListener('click', () => display.innerText = '0');
    }

    // 'Clear' clear display and reset counter handler
    else {
        btn.addEventListener('click', () => {
            calc.reset();
            display.innerText = '0';
        });
    }
}