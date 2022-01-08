const sounds = ["applause","boo","gasp","tada","victory","wrong"]
for(var i=0;i<sounds.length;i++){
    const sn = sounds[i]
    playSound(sn)
}

function playSound(sn){

    const buttonxyz = document.createElement("button")
    buttonxyz.classList.add("btn")

    buttonxyz.innerText = sn

    buttonxyz.addEventListener("click",()=>{
        stopSounds()
        document.getElementById(sn).play()
    })
    const divElementxyz = document.getElementById("buttons")

    divElementxyz.appendChild(buttonxyz)

}

function stopSounds(){
    for(var i=0;i<sounds.length;i++){
        const sound = document.getElementById(sounds[i])
        sound.pause()
        sound.currentTime = 0
    } 
}