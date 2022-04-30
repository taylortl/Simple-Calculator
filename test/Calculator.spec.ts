import chai, { expect } from "chai"
import chaiAsPromised from "chai-as-promised"
import { Calculator } from "../src/Calculator"
import {folderTest} from "@ubccpsc310/folder-test"

// var chai = require("chai");
// var chaiAsPromised = require("chai-as-promised");
// the above is equivalent to importing chaiAsPromised from "chai-as-promised"
chai.use(chaiAsPromised);

// defines the type of input and output of folder test 
type Input = number[];
type Output = Promise<number>

describe("Tests for Calculator", function() {
    // tests using mocha and chai packages
    describe("Addition", function () {
        it("Postive numbers", async function () {
            const ourCalculator = new Calculator() 
            const result = await ourCalculator.add([1,2])
            expect(result).to.equals(3)
        })

        it("Negative numbers", function () {
            const ourCalculator = new Calculator() 
            const result = ourCalculator.add([-1,-2])

            // waits for the result of the promise before checking
            expect(result).eventually.to.equals(-3)  
        })
    })

    // tests using folder test package from cpsc 310 
    folderTest<Input, Output, Error>(
        "Testing Using Folder Test",                            
        (input: Input): Output => {
            const ourCalculator = new Calculator() 
            return ourCalculator.add(input) 
        },    
        "./test/json.tests",                   
    )

    
})