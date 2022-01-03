function convertToRoman(num) {
    const symbols = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
    //your code here
    // for all the keys in symbol, go one by one
    // for(var xyz in symbols){
    //     console.log(xyz,symbols[xyz])
    // }
    var ans = ""
    for(var k of Object.keys(symbols)){

        // console.log(k,symbols[k])
        var times = Math.floor(num/symbols[k])

        num = num-times*symbols[k] // num =  333 - 3*100
        ans=ans+k.repeat(times)

    }

    return ans;
  
  }

console.log(convertToRoman(333))


// Objects
// Time Complexity and Recursion