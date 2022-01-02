// Time Complexity
// Complexity - Tells you how complex an algorithm is
// Time C - tells you how long an algorithm with take

let arr = [1,3,5,7,9,11,12,5,6]

// check if 6 exists in arr or not

let target = 6

function findElement(arr,target){
    console.log("hello") // O(1)
    for(let i=0;i<arr.length;i++){ // length=>n
        if(arr[i]===target){
            return true // O(1)
        }
    }
    for(let i=0;i<arr2.length;i++){ // => length m
        if(arr2[i]===target){
            return true // O(1)
        }
    }

    // O(n) + O(m) = O(n+m)
// Understand the difference between O(n+m) and O(mn)
    return false  
}
//  O(3*n + 1)
// O(n +abc) => O(n)
// O(kn) => O(n)
// console.log(findElement(arr,200))

m = arr.length
n = arr2.length
for(var i=0;i<m;i++){
    console.log(arr[i])
}
for(var j=0;j<n;j++){
    console.log(arr2[i])
}
// O(m)+O(n) = O(m+n)


for(var i=0;i<m;i++){
    for(var j=0;j<n;j++){
        console.log(arr[i],arr2[i])
    }
}
// O(m)*O(n) = O(mn)

// arr
for(var i=0;i<m;i++){
    console.log(arr[i])
} //O(m)
for(var i=0;i<m;i++){
    console.log(arr[i])
} //O(m)
// O(m) +O(m) = O(m+m) =O(2m) = O(m)


for(var i=0;i<n;i++){
    for(var j=0;j<n;j++){
        console.log(arr[i])
    }
}
// O(n^2)
for(var j=0;j<n;j++){
    console.log(arr[i])
}
// O(n)

// O(n^2 +n )
// O(n(n+1)) => O(n*n) => O(n^2)
// n=64
// 64,32,16,8,4,2,1
for(var i=n;i>0;i=i/2){
    console.log(i)
}



