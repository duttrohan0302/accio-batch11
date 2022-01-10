function letterCombinations(A) {
  
    const phone = {
    "0": "0",
    "1": "1",
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz"
    }

    let len = A.length

    let ans = []

    if(!len)
        return ans
    
    const bfs = (pos,str) => {

        if(pos === len){
            ans.push(str)
        }else{
            let letters = phone[A[pos]]
            for(let i = 0;i<letters.length;i++){
                bfs(pos+1,str+letters[i])
            }
        }
    }

    bfs(0,"")
    return ans

}

console.log(letterCombinations("123456"))



