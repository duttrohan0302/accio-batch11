const prev = document.getElementById("prev")
const progress = document.getElementById("progress")
const next = document.getElementById("next")
const circles = document.querySelectorAll(".circle")

let currentActive = 1
let numberOfCircles = circles.length

next.addEventListener("click",()=>{
    currentActive++;

    if(currentActive>numberOfCircles){
        currentActive = numberOfCircles
    }
    console.log(currentActive)
    updateCSS()
})

prev.addEventListener("click",()=>{
    currentActive--;

    if(currentActive<1){
        currentActive = 1
    }
    console.log(currentActive)
    updateCSS()

})

function enableDisable(){

    if(currentActive===1){
        prev.disabled = true
    }else if(currentActive===numberOfCircles){
        next.disabled = true
    }else{
        prev.disabled = false
        next.disabled = false
    }
}

function updateCSS(){
    for(var i=0;i<numberOfCircles;i++){
        const circle = circles[i]

        if(i<currentActive){
            circle.classList.add("active")
        }else{
            circle.classList.remove("active")
        }
    }

    const activesxyz = document.querySelectorAll(".active")

    // Calculate width
    // Set progress bar width = formula
    const widthxyz = (activesxyz.length-1)/(circles.length-1)*100

    progress.style.width = widthxyz + "%"
    enableDisable()

}