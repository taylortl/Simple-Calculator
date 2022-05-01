import  chai, { expect } from "chai"
import chaiAsPromised from "chai-as-promised"
import { Calculator} from "../src/Calculator"
import {folderTest} from "@ubccpsc310/folder-test"
import { EmptyList } from "../src/exceptions/EmptyList"

// var chai = require("chai")
// var chaiAsPromised = require("chai-as-promised")
// the above is equivalent to importing chaiAsPromised from "chai-as-promised"
chai.use(chaiAsPromised)

// defines the type of input and output of folder test 
type Input = number[]
type Output = Promise<number>
type Error = "EmptyList" // defines the error string expected to have 

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
            return expect(result).eventually.to.equals(-3)  
        })

        it("Empty List", function () {
            const ourCalculator = new Calculator() 
            const result = ourCalculator.add([])

            // waits for the result of the promise before checking
            return expect(result).to.eventually.be.rejectedWith(EmptyList)  
        })
    })

    // tests using folder test package from cpsc 310 
    folderTest<Input, Output, Error>(
        "Testing Using Folder Test",                            
        (input: Input): Output => { // what we want to test on
            const ourCalculator = new Calculator() 
            return ourCalculator.add(input) 
        },    
        "./test/json.tests",// target file
        { // options
            errorValidator: (error): error is Error =>
                error === "EmptyList",
            assertOnError: ((actual, expected) => {
                if (expected === "EmptyList") {
                    expect(actual).to.be.instanceOf(EmptyList)
                } else {
                    // this should be unreachable 
                    expect.fail(actual + " is an unexpected error")
                }

            })
        }                
    )

    
})