import { expect } from "chai"
import { Calculator } from "../src/Calculator"

describe("Calculator", function() {
    describe("Addition", function () {
        it("Addition of 2 postive number", function () {
            const ourCalculator = new Calculator() 
            const result = ourCalculator.add([1,2])
            expect(result).to.equals(3)
        })

        it("Addition of 2 negative number", function () {
            const ourCalculator = new Calculator() 
            const result = ourCalculator.add([-1,-2])
            expect(result).to.equals(-3)
        })
    })
    
})