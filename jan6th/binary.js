
function decimalToBinary(num){
    let binaryStr = ""

    while(num>0){

        let rem = num%2;

        // Method 1 - Appending the new binary character to the front of the string
        // binaryStr = rem.toString() + binaryStr

        // Method 2 - Append it to the end
        binaryStr = binaryStr + rem.toString()

        num = Math.floor(num/2)
    }
    // Method - 1
    // return binaryStr


    // Method 2- Reverse it
    return binaryStr.split("").reverse().join("")
}

function binaryToDecimal(binaryStr){

    let multiplier = 1 // 2^0
    let num=0;
    for(let i = binaryStr.length -1 ;i>=0;i--){

        num = num+ parseInt(binaryStr[i])*multiplier

        multiplier = multiplier*2
    }

    return num
}

// console.log(decimalToBinary(18))
// console.log(binaryToDecimal("10010"))

// Shortcut to convert decimal to binary
console.log((18).toString("2"))

// Shortcut to convert binary to decimal
console.log(parseInt("10010",2))
