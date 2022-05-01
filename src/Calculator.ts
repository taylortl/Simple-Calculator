import { EmptyList } from "./exceptions/EmptyList"
export class Calculator {
    add(nums: number[]) : Promise<number> {
        if (nums.length == 0) {
                return Promise.reject(new EmptyList())
        }
        return Promise.resolve(nums.reduce((num, sum) => num + sum))
    } 
}