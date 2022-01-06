function isPrime(num){

    // let count = 0;
    // if(num<=1){
    //     return false
    // }
    // for(let i=1;i<=num;i++){
    //     if(num%i===0){
    //         count++;
    //     }
    //     if(count>2){
    //         return false
    //     }
    // }
    // if(count===2){
    //     return true
    // }

    const boundary = Math.floor(Math.sqrt(num))

    for(let i=2;i<=boundary;i++){
        if(num%i==0)
            return false
    }
    if(num<2)
        return false
    return true
}
console.log(isPrime(1))