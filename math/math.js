const addition = (a, b) => {
    return a + b;
}

const subtraction = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const squareRoot = (a) => Math.sqrt(a);

const maxNum = (a, b) => Math.max(a, b);

module.exports = {
    addition,
    subtraction,
    multiply,
    divide,
    squareRoot,
    maxNum
}