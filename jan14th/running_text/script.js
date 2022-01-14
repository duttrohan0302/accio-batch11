const textEl = document.getElementById("text")
const speedEl = document.getElementById("speed")

const text = "We love Programming!"

let idx = 1

const NUM = 500
let time = NUM/speedEl.value

writeText()

function writeText(){
    textEl.innerHTML = text.slice(0,idx)

    idx++;

    if(idx>text.length){
        idx=1
    }

    setTimeout(writeText,time)
}

speedEl.addEventListener("input",(e)=> {time = NUM/e.target.value
    
})


