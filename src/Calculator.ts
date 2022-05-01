import { EmptyList } from "./exceptions/EmptyList"
import { InvalidDivisor } from "./exceptions/InvalidDivisor"
export class Calculator {
    add(nums: number[]) : Promise<number> {
        if (nums.length == 0) {
            return Promise.reject(new EmptyList())
        }
        return Promise.resolve(nums.reduce((num, sum) => num + sum))
    } 

    subtract(num1: number, num2: number) : Promise<number> {
        return Promise.resolve(num1 - num2)
    }

    multiple(nums: number[]) : Promise<number> {
        if (nums.length == 0) {
            return Promise.reject(new EmptyList())
        }
        return Promise.resolve(nums.reduce((num, sum) => num * sum))
    } 

    divide(numerator: number, denominator: number) : Promise<number> {
        if (denominator == 0) {
            return Promise.reject(new InvalidDivisor())
        }
        return Promise.resolve(numerator / denominator)
    } 
}