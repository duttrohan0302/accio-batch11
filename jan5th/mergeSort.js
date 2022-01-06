// Javascript by default uses insertion Sort

function merge(nums,left,middle,right){

    var n1 = middle-left +1;
    var n2 = right - middle;

    var L = new Array(n1);
    var R = new Array(n2);

    for(var i=0;i<n1;i++){
        L[i] = nums[left+i]
    }
    for(var i=0;i<n2;i++){
        R[i] = nums[middle + 1 + i]
    }

    console.log(L,R)

    var i = 0;
    var j = 0;

    var k = left;

    while(i<n1 && j<n2){
        if(L[i]<=R[j]){
            nums[k] = L[i]
            i++
        }else{
            nums[k] = R[j]
            j++
        }
        k++
    }


    while(i<n1){
        nums[k] =L[i]
        i++
        k++
    }
    while(j<n2){
        nums[k] = R[j]
        j++
        k++
    }
}

function divideArr(nums,left,right){
    
    if(left>=right){
        return;
    }

    var middle = left + parseInt((right-left)/2);

    divideArr(nums,left,middle);
    divideArr(nums,middle+1,right);

    merge(nums,left,middle,right);

    // var mid = (right +left) /2;
}
function mergeSort(nums){

    divideArr(nums,0,nums.length-1)
    console.log(nums)
}

let nums = [12,11,13,5,7,6]
mergeSort(nums)

// Decreasing the time complexity but increasing the space complexity