export class Calculator {
    add(nums: number[]) : number {
        return nums.reduce((num, sum) => num + sum)
    } 
}