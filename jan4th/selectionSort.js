function selectionSort(arr){

    // For n passes
    for(let i=0;i<arr.length;i++){
        let min = i

        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min = j
            }
        }

        if(min!==i){
            [arr[i],arr[min]] =[arr[min],arr[i]]
        }
        // We use backticks when we want to insert variable value in a string
        console.log(`After ${i+1} th pass, Arr is ${arr}`)
    }
    return arr
}

let arr = [2,7,9,1,8,6,5,3]
console.log(selectionSort(arr))
