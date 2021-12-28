function palindrome(str) {
    // your code here!
    // str = str.toLowerCase()
    // First method
    // Check 1st and last char, check 2nd and 2nd last char and so on
    let len = str.length;

    // for(statement1; statement2;statement3)
    for(let index=0;index<len/2;index++){
        if(str[index]!==str[len-1-index]){
            return false;
        }
    }
    return true;
    //code end. don't edit anything below
}

console.log(palindrome("naman"))
console.log(palindrome("rohan"))
console.log(palindrome("abcddcba"))