"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
const EmptyList_1 = require("./exceptions/EmptyList");
const InvalidDivisor_1 = require("./exceptions/InvalidDivisor");
class Calculator {
    add(nums) {
        if (nums.length == 0) {
            return Promise.reject(new EmptyList_1.EmptyList());
        }
        return Promise.resolve(nums.reduce((num, sum) => num + sum));
    }
    subtract(num1, num2) {
        return Promise.resolve(num1 - num2);
    }
    multiple(nums) {
        if (nums.length == 0) {
            return Promise.reject(new EmptyList_1.EmptyList());
        }
        return Promise.resolve(nums.reduce((num, sum) => num * sum));
    }
    divide(numerator, denominator) {
        if (denominator == 0) {
            return Promise.reject(new InvalidDivisor_1.InvalidDivisor());
        }
        return Promise.resolve(numerator / denominator);
    }
}
exports.Calculator = Calculator;
