"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
class Calculator {
    add(nums) {
        return nums.reduce((num, sum) => num + sum);
    }
}
exports.Calculator = Calculator;
