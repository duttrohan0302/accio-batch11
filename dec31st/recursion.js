// Recursion means calling self

// With Recursion => Always give stopping criterion/base case/condition for stopping
function print(num){
    if(num<1){
        return;
    }
    console.log(num)

    print(num-1)
}

// print(20)

// Factorial ??
// Write a code which calculates factorial of a number
// 5! = 120, 4! = 24, 0!=1, 1!=1
// 5! = 5*4*3*2*1
function factorial(num){
    if(num===1)
        return 1
    return num*factorial(num-1)

}

// console.log(factorial(7))

// 0,1,1,2,3,5,8,13,21...
function fibonacci(n){

    // if(n==0)
    //     return 0
    // else if(n==1)
    //     return 1
    // Base case(take care of this because silly mistakes)
    if(n<2)
        return n
    
    //Recursive case
    return fibonacci(n-1)+fibonacci(n-2)
}

for(let i=0;i<=7;i++){
    console.log(fibonacci(i))
}

// 10 numbers
let arrFibonacci = [-1,-1,-1,-1,-1,-1,-1,-1,-1]
// Memoization - Remember the values you calculated
// check if arrFibonacci[i]!=-1
// I already know Fib(i), just return it

//  if arrFibonacci[i]===-1
    // calculate Fib(i) and store it in arrFibonacci[i]

