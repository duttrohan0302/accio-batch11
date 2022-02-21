
// total score - 121
// const frames = {
//     1: [10,2,8],
//     2: [2,8,5],
//     3: [5,5,4],
//     4: [4,2],
//     5: [3,4],
//     6: [9,0],
//     7: [0,10,2],
//     8: [2,8,4],
//     9: [4,3],
//     10:[10,5,2]
// }

const game = (rolls) => {
    // [10,2,8,5,5,4,2,3,4,9,0,0,10,2,8,4,3,10,5,2]
    let score = 0;
    let rollIndex = 0;

    for(let frameIndex=1;frameIndex<=10;frameIndex++){
        // strike
        if(rolls[rollIndex]===10){
            score+=10+rolls[rollIndex+1]+rolls[rollIndex+2];
            rollIndex++;
        }else{
            let frameScore = rolls[rollIndex]+rolls[rollIndex+1]
            if(frameScore===10){
                // spare
                score+=10+rolls[rollIndex+2];
            }else{
                // normal
                score+=frameScore
            }
            rollIndex+=2;
        }
    }
    return score;
    // return ({
    //     totalScore: 0,
    //     frames :{}
    // })
}

const rolls = [10,2,8,5,5,4,2,3,4,9,0,0,10,2,8,4,3,10,5,2]

console.log(game(rolls))