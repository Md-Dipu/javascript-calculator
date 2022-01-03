// operation and counter
class Operation {
    counter = null;
    currentOperator = null;

    setInput = (inputNumber) => {
        if (this.counter === null) {
            this.counter = inputNumber;
        }
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

    // operation handler
    else if (['+', '-', '*', '/'].includes(btnValue)) {
        btn.addEventListener('click', e => {
            /* 1. set inputed number
             * 2. set operator
             * 3. change operator
             * 4. 
             */
        });
    }

    // result handler
    else if (btnValue === '=') {
        btn.addEventListener('click', () => {
            /* 1. set inputed number
             * 2. display result
             * 3. clear counter and operator
             * 4. 
             */
        });
    }

    // 'C' clear display handler
    else if (btnValue === 'C') {
        btn.addEventListener('click', () => display.innerText = '0');
    }

    // 'Clear' clear display and reset counter handler
    else {
        btn.addEventListener('click', () => {
            /* 1. clear counter
             * 2. clear operator
             * 3. clear display
             */
        });
    }
}