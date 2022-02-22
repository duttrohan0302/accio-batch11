// Unit testing
// Integration testing

const { expect } = require("@jest/globals")
const {game} = require("./bowling")


describe("Check for all strikes condition",()=>{
    const rolls = [10,10,10,10,10,10,10,10,10,10,10,10]

    it("should say the total score is 300",()=>{
        expect(game(rolls).score).toBe(300)
    })

    const expectedFrames = {}
    for(let i=1;i<=10;i++){
        expectedFrames[i]=[10,10,10]
    }
    it("should say the total score is 300",()=>{
        expect(game(rolls).frames).toStrictEqual(expectedFrames)
    })
})

describe("Check for custom test case condition",()=>{
    const rolls = [10,2,8,5,5,4,2,3,4,9,0,0,10,2,8,4,3,10,5,2]

    const {score, frames} = game(rolls)
    it("should say the total score is 121",()=>{
        expect(score).toBe(121)
    })

    const expectedFrames = {
        1: [10,2,8],
        2: [2,8,5],
        3: [5,5,4],
        4: [4,2],
        5: [3,4],
        6: [9,0],
        7: [0,10,2],
        8: [2,8,4],
        9: [4,3],
        10:[10,5,2]
    }

    it("should match the frames",()=>{
        // expect(JSON.stringify(frames)).toBe(JSON.stringify(expectedFrames))
        expect((frames)).toStrictEqual((expectedFrames))
    })
})