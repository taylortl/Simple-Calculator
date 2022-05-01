"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
const EmptyList_1 = require("./exceptions/EmptyList");
class Calculator {
    add(nums) {
        if (nums.length == 0) {
            return Promise.reject(new EmptyList_1.EmptyList());
        }
        return Promise.resolve(nums.reduce((num, sum) => num + sum));
    }
}
exports.Calculator = Calculator;
