// operation and counter
export class Operation {
    counter = null;
    currentOperator = null;
    isOperatorAttached = false;
    afterView = true;

    setCounter = (inputNumber) => {
        if (this.counter === null) {
            this.counter = inputNumber;
        } else {
            this.#operationExe(inputNumber);
        }
    };

    reset = () => {
        this.counter = null;
        this.currentOperator = null;
        this.isOperatorAttached = false;
        this.afterView = true;
    };

    // private: operation executioner
    #operationExe = (newNumber) => {
        switch (this.currentOperator) {
            case '+':
                this.counter += newNumber;
                break;
            case '-':
                this.counter -= newNumber;
                break;
            case '*':
                this.counter *= newNumber;
                break;
            case '/':
                this.counter /= newNumber;
                break;
        }
    };
}