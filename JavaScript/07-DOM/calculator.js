const firstNumber = document.querySelector("#firstNumber");
const secondNumber = document.querySelector("#secondNumber");
const result = document.querySelector('#result');
const display = document.querySelector("#display");
const additionButton = document.querySelector("#add");


// const first = Number.parseFloat(firstNumber.value);
const getValues = () => {
    return [Number.parseFloat(firstNumber.value), Number.parseFloat(secondNumber.value)];
}

const printToHistory = (num1, num2, operator, result) => {
    const p = document.createElement("p"); //<p> </p>
    const text = document.createTextNode(`${num1} ${operator} ${num2} = ${result}`);

    // append the text to the element
    p.appendChild(text); // <p> with some text inside </p>
    display.appendChild(p);
}


// methods 
const addition = () => {
    const [first, second] = getValues();
    const computation = first + second;
    result.value = computation;
    printToHistory(first, second, "+", computation);
}

const subtract = () => {
    const [first, second] = getValues();
    const computation = first - second;
    result.value = computation;
    printToHistory(first, second, "-", computation);
}

const multiply = () => {
    const [first, second] = getValues();
    const computation = first * second;
    result.value = computation;
    printToHistory(first, second, "x", computation);
}

const divide = () => {
    const [first, second] = getValues();
    const computation = first / second;
    result.value = computation;
    printToHistory(first, second, "/", computation);
}

const resetValues = () => {
    firstNumber.value = "";
    secondNumber.value = "";
    result.value = "";
}

const clearHistory = () => {
    display.innerHTML = "";
}

additionButton.addEventListener("click", addition);