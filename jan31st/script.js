const message = document.querySelector(".message")
const button = document.querySelector("button")
const gameArea = document.querySelector(".gameArea")
const results = document.querySelector(".results")
const directions = document.querySelector(".directions")

let inPlay = false;
let count = 0;
let playArea = {}

function showMessage(notification){
    message.innerHTML = `<h3>${notification}</h3>`
}

// This function returns a random number from 0 to number
function random(number){
    let val = Math.floor(Math.random()*number)

    return val;
}

function getColor(){
    function color(){
        let hex = random(255).toString(16)

        return hex.padStart(2,"0")
    }
    return "#"+color()+color()+color()  
    // return `rgb(${random(255)},${random(255)},${random(255)}})`  
}

function myBox(){
    let element = document.createElement("div")
    element.classList.add("box");

    element.style.top = random(setTopMargin())+'px';
    element.style.left = random(setLeftMargin())+'px';

    element.style.backgroundColor = getColor();
    element.start = new Date().getTime();
    element.addEventListener("click",hit)

    gameArea.appendChild(element)
}
function hit(e){

}

function setTopMargin(){

}
function setLeftMargin(){

}

function resetGame(){
    
}

function showBox(){
    var interval = setTimeout(()=>console.log("h"),1000)

    playArea.timer = setTimeout(myBox,random(4000));
}

showMessage("Click Start to Begin!")

button.addEventListener("click",function(){

    inPlay = true;

    button.style.display = "none"
    directions.style.display = "none";
    results.innerHTML = ''
    count = 0;

    showMessage("Starting...")
    showBox()
})
