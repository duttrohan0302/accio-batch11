

function bubbleSort(arr){

    let alreadySorted = true
    // O(n) check
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]>arr[i+1]){
            alreadySorted = false
            break;
        }

    }

    if(alreadySorted){
        console.log(alreadySorted)
        return arr
    }

    // Outer Pass - n passes
    for(let i=0;i<arr.length;i++){

        // Inner Pass
        for(let j=0;j<arr.length-i-1;j++){

            // Ascending Order
            // Check if first number is greater than second number

            if(arr[j]>arr[j+1]){

                // Swap them
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] =temp

                // Another way of swapping
                // [arr[j+1],arr[j]] = [arr[j],arr[j+1]]

            }
        }
    }

    return arr
}

// let arr = [7,5,8,9,2,3,1,6]
let arr = [1,2,3,4,5]

console.log(bubbleSort(arr))