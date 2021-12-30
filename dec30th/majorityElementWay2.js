function major(nums,n){
    // To sort an array in JavaScript
    // nums.sort()
    // It treats numbers as strings i.e. 25 will be greater than 100 as '2' > '1'
    // (a,b) => a-b
    // If a-b is negative, put a before b, otherwise put b before a
    nums.sort((a,b)=>a-b)
    return nums[Math.floor(n/2)]

    // return nums[i]
}

// let nums=[4,4,4,1,2,3,4]

// let ans = major(nums,nums.length)
// console.log(ans)

// floor means  greatest integer less than or equal

// floor(7/2) = floor(3.5) = 3
// floor(6/2) = floor(3) = 3

// floor(-7/2) = floor(-3.5) = -4 (NOT -3)
// floor(-6/2) = floor(-3) = -3


function majorityElement(nums,n){
    let vote = 0, candidate = 0

    for(let i = 0;i<n;i++){
        let num = nums[i]
        if(vote===0){
            candidate = num
        }
        // console.log(candidate)
        if(num===candidate){
            vote++;
        }else{
            vote--
        }
    }

    // Extra check

    /*
    let count = 0

    for(let num in nums){
        if(num===candidate)
            count++
    }
    if(count>Math.floor(n/2))
        return candidate
    else
        return "No majority element present"
    */

    return candidate
}

let nums=[4,4,4,1,2,3,4]

console.log(majorityElement(nums,nums.length))


// Boyer-Moore Voting Algorithm
// It is utlizing the fact that the element needs to occur more than n/2 times
// Intuition

// Initially votes = 0, candidate = -1
// Traverse the array
//  if votes === 0 choose candidate = arr[i], votes++
// else if arr[i]===candidate , just simply votes++
// else (arr[i]!== candidate), just decrease votes

// Just to be double sure, we check if candidate is occurring >n/2 times or not