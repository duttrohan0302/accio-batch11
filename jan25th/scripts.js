const keys = document.querySelectorAll(".key")

function removeTransition(e){
    if(e.propertyName!=='transform')
        return;
    this.classList.remove("playing")
    // e.target.classList.remove("playing")
}
keys.forEach(key=>key.addEventListener("transitionend",removeTransition))
window.addEventListener("keydown",playSound)

function playSound(e){
    const code = e.keyCode
    const audio = document.querySelector(`audio[data-key="${code}"]`)
    const key = document.querySelector(`div[data-key="${code}"]`)

    if(!audio){
        return;
    }
    key.classList.add("playing")
    audio.currentTime = 0
    audio.play()
}
