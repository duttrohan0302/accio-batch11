function major(nums,n)
{
  //your code here

    // Store frequency of every element

    let requiredFrequency = Math.floor(n/2)+1

    let store = {} //object

    for(let i=0;i<n;i++){

        console.log(store)

        if(store[nums[i]]!==undefined)
            store[nums[i]]++;
        else
            store[nums[i]]=1

        if(store[nums[i]]===requiredFrequency){
            console.log(store)
            return nums[i]
        }  
    }

}

let nums = [2,2,2,2,2,3,2]

// console.log(major(nums,nums.length))
let store2={}

console.log(store2[2])

store2[2]=1
store2[2]++

console.log(store2[2])
