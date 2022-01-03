let startTime = new Date()
let n = 1000
let j=0
console.log(startTime)
for(let i=0;i<n;i++){
    for(let k=0;k<n;k++){
        j=j+1
    }
}
// O(n^2)
// O(n^2 +n) = O(n^2)
let endTime = new Date()
console.log(endTime)

console.log(endTime-startTime)
// O(1),O(n),O(n^2),O(logn)