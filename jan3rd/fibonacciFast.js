let arr = []

function fibonacci(n){

    if(arr[n]!==-1){
        return arr[n]
    }
    if(n<2)
        return n
    
    //Recursive case
    let x = fibonacci(n-1)+fibonacci(n-2)
    arr[n] = x
    return x
}


function findAllFib(number){

    arr.push(0)
    arr.push(1)
    for(let i=2;i<=number;i++){
        arr.push(-1)
    }
    for(let i=2;i<=number;i++){
        fibonacci(i)
    }
    console.log(arr)
}

let startTime = new Date()
findAllFib(40)
let endTime = new Date()

console.log(endTime-startTime)

