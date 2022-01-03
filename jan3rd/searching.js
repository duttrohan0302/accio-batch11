// Linear Search
function linearSearch(nums,target){
    for(let i=0;i<nums.length;i++){
        if(nums[i]===target)
            return true
    }
    return false
}
// Binary Search - PreCondition - Array must be sorted


let nums = [1,3,5,7,8,9]
let target = 3
// console.log(linearSearch(nums,target))

function binarySearch(nums,target){
    let start = 0, end = nums.length-1
    let index = -1
    while(start<=end){
        let mid = Math.floor((start+end)/2)

        if(nums[mid]===target){
            index = mid
            return index
        }
        else if(nums[mid]<target)
            start = mid+1
        else
            end = mid-1
    }
    return index
}

console.log(binarySearch(nums,3))



