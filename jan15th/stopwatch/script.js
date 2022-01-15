const stopwatch = document.getElementById("display")

const playButton = document.getElementById("playButton")
const pauseButton = document.getElementById("pauseButton")
const resetButton = document.getElementById("resetButton")

var hr = 0
var min = 0
var sec = 0

var ms = 0

var timeStopped = true
// timeStopped? if true means stopwatch is not running currently
//  If false, means stopwatch is running currently

function startStopwatch(){
    if(timeStopped){
        timeStopped = false
        setTimeout(stopwatchCycle,1000);
        // setTimeout(stopwatchCycle,10);
        showButton("PAUSE")
    }
}

function stopwatchCycle(){
    if(timeStopped===false){
        sec=parseInt(sec)
        min = parseInt(min)
        hr = parseInt(hr)
        // ms = parseInt(ms)

        sec+=1
        // ms+=1

        // if(ms===100){
        //     sec+=1
        //     ms=0
        // }
        if(sec===60){
            min+=1;
            sec=0;
            // ms=0
        }
        if(min===60){
            hr+=1;
            min = 0;
            sec=0;
            // ms=0
        }

    if(sec<10){
        sec="0"+sec
    }
    if(min<10){
        min="0"+min
    }
    if(hr<10){
        hr="0"+hr
    }
    // ms = ms.toString().padStart(2,"0")
    stopwatch.innerHTML = `${hr}:${min}:${sec}`
    // setTimeout(stopwatchCycle,1000)
    setTimeout(stopwatchCycle,1000)


    // let formattedHH = hr.toString().padStart(2,"0")
    // let formattedMM = min.toString().padStart(2,"0")
    // let formattedSS = sec.toString().padStart(2,"0")
    // stopwatch.innerHTML = `${formattedHH}:${formattedMM}:${formattedSS}`
    }

}
function stopStopwatch(){
    if(timeStopped===false){
        timeStopped = true
        showButton("PLAY")
    }
}

function resetStopwatch(){
    stopwatch.innerHTML="00:00:00"
    timeStopped = true
    hr = 0
    min = 0
    sec = 0
    showButton("PLAY")
}

function showButton(buttonKey){
    // let buttonToShow,buttonToHide;

    // if(buttonKey==="PLAY"){
    //     buttonToShow = playButton
    //     buttonToHide = pauseButton
    // }else{
    //     buttonToShow = pauseButton
    //     buttonToHide = playButton
    // }
    // buttonToShow.style.display = "block";
    // buttonToHide.style.display = "none";

    if(buttonKey==="PLAY"){
        playButton.style.display="block"
        pauseButton.style.display="none"
    }else{
        playButton.style.display="none"
        pauseButton.style.display="block"
    }
}


playButton.addEventListener("click",startStopwatch)
pauseButton.addEventListener("click",stopStopwatch)
resetButton.addEventListener("click",resetStopwatch)