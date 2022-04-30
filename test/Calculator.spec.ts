import chai, { expect } from "chai"
import chaiAsPromised from "chai-as-promised"
import { Calculator } from "../src/Calculator"

// var chai = require("chai");
// var chaiAsPromised = require("chai-as-promised");
// the above is equivalent to importing chaiAsPromised from "chai-as-promised"
chai.use(chaiAsPromised);

describe("Calculator", function() {
    describe("Addition", function () {
        it("Addition of 2 postive number", async function () {
            const ourCalculator = new Calculator() 
            const result = await ourCalculator.add([1,2])
            expect(result).to.equals(3)
        })

        it("Addition of 2 negative number", function () {
            const ourCalculator = new Calculator() 
            const result = ourCalculator.add([-1,-2])

            // waits for the result of the promise before checking
            expect(result).eventually.to.equals(-3)  
        })

        
    })
    
})