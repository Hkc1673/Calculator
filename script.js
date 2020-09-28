class Calculator {
    constructor(prevOperand, currentOperand){
        this.prevOperandElement = prevOperand;
        this.currentOperantElement = currentOperand;
    }

    clear() {

    }

    delete() {

    }

    appendNumber() {
      
    }

    chooseOperation() {

    }

    compute() {

    }

    getDisplayNumber() {

    }

    updateDisplay() {
        
    }
}







const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalButton = document.querySelectorAll("[data-equals]");
const deleteButton = document.querySelectorAll("[data-delete]");
const allClearButton = document.querySelectorAll("[data-all-clear]");
const previousOperandTextElement = document.querySelector("[data-previous-operand]");
const currentOperandTextElement = document.querySelector("[data-current-operand]");

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach((button) => {
    button.addEventListener("click", function () {
        calculator.appendNumber(button.innerText);
    })
})