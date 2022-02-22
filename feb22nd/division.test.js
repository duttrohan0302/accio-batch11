const { expect } = require("@jest/globals")
const {division,add} = require("./division")

// Describe what the test block does
describe("Block for division testing",()=>{

    it("should return 2.5 for a=5 and b=2",()=>{
        expect(division(5,2)).toBe(2.5)
    })

    it("should return 2.5 for a=10 and b=2",()=>{
        expect(division(10,2)).toBe(5)
    })

    
    it("should return a value close to 1.67 for a=5 and b=3",()=>{
        expect(division(5,3)).toBeCloseTo(1.67)
    })

    it("should return Invalid for a=5 and b=0",()=>{
        expect(division(5,0)).toBe("Invalid")
    })

    it("should return Invalid for string values",()=>{
        expect(division("5",0)).toBe("Invalid")
    })

})

describe("Block for division testing",()=>{

    it("should return 7 for a=5 and b=2",()=>{
        expect(add(5,2)).toBe(7)
    })
})