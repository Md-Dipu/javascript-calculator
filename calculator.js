// display field
const display = document.querySelector('.display');

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
            if (current.includes('.') && e.target.innerText === '0')
                display.innerText = current;
            else
                display.innerText = parseFloat(current);
        });
    }

    // float point handler
    else if (btnValue === '.') {
        btn.addEventListener('click', e => {
            const current = display.innerText;
            if (!current.includes('.')) {
                display.innerText += e.target.innerText;
            }
        });
    }

    // oprator handler
    else if (['+', '-', '*', '/'].includes(btnValue)) {
        btn.addEventListener('click', () => display.innerText = '0');
    }

    // '=' display result handler
    else if (btnValue === '=') {
        btn.addEventListener('click', () => display.innerText = '0');
    }

    // 'C' clear display handler
    else if (btnValue === 'C') {
        btn.addEventListener('click', () => display.innerText = '0');
    }

    // 'Clear' clear display and reset counter handler
    else {
        btn.addEventListener('click', () => display.innerText = '0');
    }
}