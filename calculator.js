const { add } = require("./operations")
const { rest } = require("./operations")


function Calculator() {
}
Calculator.plus = function plus(num1, num2) {
    return add(num1, num2)
}
Calculator.res = function res(num1, num2) {
    return rest(num1, num2)
}


module.exports = Calculator;