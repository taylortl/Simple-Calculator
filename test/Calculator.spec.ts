import  chai, { expect } from "chai"
import chaiAsPromised from "chai-as-promised"
import { Calculator} from "../src/Calculator"
import {folderTest} from "@ubccpsc310/folder-test"
import { EmptyList } from "../src/exceptions/EmptyList"
import { InvalidDivisor } from "../src/exceptions/InvalidDivisor"

// var chai = require("chai")
// var chaiAsPromised = require("chai-as-promised")
// the above is equivalent to importing chaiAsPromised from "chai-as-promised"
chai.use(chaiAsPromised)

// defines the type of input and output of folder test 
type Input = number[]
type Output = Promise<number>
type Error = "EmptyList" | "InvalidDivisor"// defines the error string expected to have 

describe("Tests for Calculator", function() {
    let ourCalculator: Calculator
    beforeEach(function () {
        ourCalculator = new Calculator();
    })

    // tests using mocha and chai packages
    describe("Addition", function () {
        it("Positive numbers", async function () {
            const result = await ourCalculator.add([1,2])
            expect(result).to.equals(3)
        })

        it("Negative numbers", function () {
            const result = ourCalculator.add([-1,-2])

            // waits for the result of the promise before checking
            return expect(result).eventually.to.equals(-3)  
        })

        it("Empty List", function () {
            const result = ourCalculator.add([])
            return expect(result).to.eventually.be.rejectedWith(EmptyList)  
        })
    })

    describe("Subtraction", function () {
        it("num1 - num2 < 0", function () {
            const result =  ourCalculator.subtract(2, 3)
            return expect(result).to.eventually.equals(-1)
        })

        it("num1 - num2 > 0", function () {
            const result = ourCalculator.subtract(4, 3)
            return expect(result).eventually.to.equals(1)  
        })
    })

    describe("Multiplication", function () {
        it("All Positives", function () {
            const result =  ourCalculator.multiple([2, 3])
            return expect(result).to.eventually.equals(6)
        })

        it("All Negatives", function () {
            const result = ourCalculator.multiple([-4, -3])
            return expect(result).eventually.to.equals(12)  
        })

        it("Positves and Negatives", function () {
            const result = ourCalculator.multiple([4, -3])
            return expect(result).eventually.to.equals(-12)  
        })

        it("With Zero", function () {
            const result = ourCalculator.multiple([0, -3])
            return expect(result).eventually.to.equals(0)  
        })

        it("Empty List", function () {
            const result = ourCalculator.add([])
            return expect(result).to.eventually.be.rejectedWith(EmptyList)  
        })
    })

    describe("Division", function () {
        it("Positive", function () {
            const result =  ourCalculator.divide(2, 3)
            return expect(result).to.eventually.equals(2/3)
        })

        it("Negative", function () {
            const result = ourCalculator.divide(-4, 3)
            return expect(result).eventually.to.equals(-4/3)  
        })

        it("Dinominator is Zero", function () {
            const result = ourCalculator.divide(3, 0)
            return expect(result).to.eventually.be.rejectedWith(InvalidDivisor)  
        })

        it("Numerator is Zero", function () {
            const result = ourCalculator.divide(0, 3)
            return expect(result).eventually.to.equals(0) 
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
                error === "EmptyList" || error === "InvalidDivisor",
            assertOnError: ((actual, expected) => {
                if (expected === "EmptyList") {
                    expect(actual).to.be.instanceOf(EmptyList)
                } else if (expected === "InvalidDivisor"){
                    expect(actual).to.be.instanceOf(InvalidDivisor)
                }else {
                    // this should be unreachable 
                    expect.fail(actual + " is an unexpected error")
                }

            })
        }                
    )

    
})