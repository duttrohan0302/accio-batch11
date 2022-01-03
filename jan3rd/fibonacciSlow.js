function fibonacci(n){

    if(n<2)
        return n
    
    return fibonacci(n-1)+fibonacci(n-2)
}
let arr=[]


function fibonacciTillNum(number){
    for(let i=0;i<=number;i++){
        arr.push(fibonacci(i))
    }
    console.log(arr)
}

let startTime = new Date()
fibonacciTillNum(40)
let endTime = new Date()

console.log(endTime-startTime)