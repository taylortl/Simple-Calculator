export class Calculator {
    add(nums: number[]) : Promise<number> {
        return Promise.resolve(nums.reduce((num, sum) => num + sum))
    } 
}