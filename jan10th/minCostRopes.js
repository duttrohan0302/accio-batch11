function mincost(arr)
{
  //write your code here
    arr.sort((a,b)=>a-b)

    let cost = 0
    console.log(arr)
    while(arr.length>1){
        let first = arr.shift()
        let second = arr.shift()

        cost+=first+second

        arr.push(first+second)
        arr.sort((a,b)=>a-b)
        console.log(arr)
    }

    return cost
}

let arr = [7,3,5,9,4]

console.log(mincost(arr))