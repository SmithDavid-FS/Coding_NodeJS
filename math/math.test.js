const {
    addition,
    subtraction,
    multiply,
    divide,
    squareRoot,
    maxNum
} = require("./math")

describe("testing the math module", () => {
    test('shold add 3 + 3', () => {
        expect(addition(3, 3)).toBe(6);
    });

    test("should subtract 9 - 3", () => {
        expect(subtraction(9, 3)).toBe(6);
    });

    test("should multiply 6 * 4", () => {
        expect(multiply(6, 4)).toBe(24);
    });

    test("should divide 50 / 2", () => {
        expect(divide(50, 2)).toBe(25);
    });

    test("should return the square root of 25", () => {
        expect(squareRoot(25)).toBe(5);
    });

    test("should select the larger number between 48 and 67", () => {
        expect(maxNum(48, 67)).toBe(67);
    });
})