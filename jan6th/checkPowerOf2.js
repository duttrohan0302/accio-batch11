// function isPowerOf2(num){ // Time complexity O(logn)
//     while(num>1){
//         let rem = num=num%2
//         if(rem!==0)
//             return false
//         num = num/2
//     }
//     return true
// }


// function isPowerOf2(num){
//     if(num===0)
//         return false
    
//     let logbase2 = Math.log(num)/Math.log(2)
//     let ceiling = Math.ceil(logbase2)
//     let flooring = Math.floor(logbase2)
//     if(ceiling===flooring){
//         // log num to the base 2 is an integer
//         // Hence num is a power of 2
//         return true

//     }

//     return false
// }


// function isPowerOf2(num){
//     if(num<=0)
//         return false
    
//     if((num & (num-1)) ===0){
//         return true
//     }else{
//         return false
//     }
// }

function powerof2 (num){
    let arr = num.toString(2);
    let arrr = arr.split("")
    console.log(arrr)
     let count =0
     for(i=0;i<arrr.length-1;i++){
         if ((arrr[i])=== '1' )
         {
            count++
         }
     }
     console.log(count)
     if (count==1)
     {
         return true
     }
     else if(num =1)
     {
         return false
     }
     else {
     return false
     }
 }
 console.log(powerof2(30))
 
console.log(isPowerOf2(32))
console.log(isPowerOf2(12))