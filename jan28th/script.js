const container = document.querySelector(".balloon-container")
const numBallons = 25;
let popped = 0
for(let i=1;i<=numBallons;i++){
    const divEl = document.createElement("div")

    divEl.classList.add("balloon")
    divEl.innerText="POP!"
    const randColor = getColor()
    divEl.style.backgroundColor = `${randColor}`
    divEl.style.color = `${randColor}`

    divEl.addEventListener("mouseenter",function(){
        if(divEl.style.backgroundColor!=="transparent"){
            popped++
        }
        console.log(popped)
        divEl.style.backgroundColor="transparent"
        checkAllPopped()
    })
    container.appendChild(divEl)
}

function checkAllPopped(){
    if(popped===25){
        console.log("All popped")
        let message = document.querySelector(".zero-balloon")
        message.style.display="block"
        container.innerHTML=''
    }
}
function getColor(){
    function color(){
        let hex = random(255).toString(16)

        return hex.padStart(2,"0")
    }
    return "#"+color()+color()+color()  
    // return `rgb(${random(255)},${random(255)},${random(255)}})`  
}

// This function returns a random number from 0 to number
function random(number){
    let val = Math.floor(Math.random()*number)

    return val;
}