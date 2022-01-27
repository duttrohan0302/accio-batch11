const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")

const startOver = document.querySelector(".resultParas")
const lowOrHi = document.querySelector(".lowOrHi")

let previousGuesses=[]
let numGuesses = 0;

let randomNumber = parseInt(Math.random()*100+1)
let maxGuesses = 10

let playGame = true;

if(playGame){
    submit.addEventListener("click",function(e){
        e.preventDefault();
    
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}


function validateGuess(guess){
    previousGuesses.push(guess)

    if(previousGuesses.length===maxGuesses){
        // Game over
        displayGuesses(guess)
        displayMsg(`Game Over! Number was ${randomNumber}`)
        endGame()
    }else{
        displayGuesses(guess)
        checkGuess(guess)
    }
}

function displayGuesses(guess){
    guessSlot.innerHTML+=`${guess} `
    // guessSlot.innerHTML= guessSlot.innerHTML + `${guess} `
    userInput.value=''
    numGuesses++;

    let remainingGuesses = maxGuesses - numGuesses

    if(remainingGuesses<0){
        remainingGuesses = 0
    }
    remaining.innerHTML = remainingGuesses
}
function displayMsg(message){
    lowOrHi.innerHTML = `<h1>${message}</h1>`
}
function checkGuess(guess){
    if(guess === randomNumber){
        displayMsg("You guessed correctly!")
        endGame()
    }else if(guess<randomNumber){
        displayMsg("Too low! Try a higher number")
    }else{
        displayMsg("Too High! Try a smaller number")
    }
}

const pEl = document.createElement("p")
function endGame(){
    userInput.value=''
    pEl.classList.add("button")
    pEl.style.cursor = "pointer"
    pEl.innerHTML = `<h1 onclick="newGame()" id="newGame">Start New Game</h1>`

    startOver.append(pEl)

    playGame=false
    userInput.disabled = true
    submit.disabled = true;
}

function newGame(){
    location.reload()
}