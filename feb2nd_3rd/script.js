const pScore = document.getElementById("playerScore")
const cScore = document.getElementById("computerScore")
const playerSelect = document.getElementById("playerSelect")
const compSelect = document.getElementById("computerSelect")

const message = document.getElementById("message")
const submit = document.getElementById("submit")

const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")

let playerScore = 0;
let computerScore = 0;

let gameActive = false;


function displayBoards(){

    const start = document.getElementById("start")
    const boards = document.getElementById("boards")
    const select = document.getElementById("select")

    start.style.display = 'none';

    boards.style.display = 'block';
    select.style.display = 'block';
    gameActive = true
}

function gameFlow(playerSelection){
    const winnerObject = getMeWinner(playerSelection)
    
    const result = winnerObject.winner
    // const { compMove } = winnerObject //destructuring
    const { compMove:computerMove } = winnerObject //destructuring
    // const compMove = winnerObject.compMove

    displaySelection('player',playerSelection,result)
    displaySelection('computer',computerMove,result)

    scoreBoard(result)
    message.innerText = result

    whoWon()
    
}

function displaySelection(whoIsPlaying,selection,result){
    if(whoIsPlaying==='player'){
        playerSelect.innerHTML = `<i class="fas fa-hand-${selection}"></i>`

        if(result === 'Player won!'){
            playerSelect.style.color = 'green'
            compSelect.style.color = 'red'
        }
    }else{
        compSelect.innerHTML = `<i class="fas fa-hand-${selection}"></i>`

        if(result === 'Computer won!'){
            playerSelect.style.color = 'red'
            compSelect.style.color = 'green'
        }

    }

    if(result==='Draw!'){
        compSelect.style.color = ""
        playerSelect.style.color = ""
    }

}

function scoreBoard(result){

    // if(!gameFinished()){
        if(result==='Player won!'){
            playerScore++
            pScore.innerText=playerScore
            cScore.innerText=computerScore
        }else if(result==='Computer won!'){
            computerScore++
            pScore.innerText=playerScore
            cScore.innerText=computerScore
        }else{
            return false
        }
    // }

}


function computerPlay(){
    let arr = ['rock','paper','scissors']

    let random = arr[Math.floor(Math.random()*arr.length)]

    return random;
}

function playRound(ps,cs){
    // return 0 if it's a draw, return 1 if player won, and return -1 if computer won
    if(ps===cs){
        return 0
    }else if(ps=="rock" && cs=="scissors"){
        return 1
    }else if(ps=="rock" && cs=="paper"){
        return -1;
    }else if(ps=="paper" && cs =="scissors"){
        return -1
    }else if(ps=="paper" && cs =="rock"){
        return 1
    }else if(ps=="scissors" && cs=="rock"){
        return -1
    }else if(ps=="scissors" && cs=="paper"){
        return 1
    }
    // if(ps===cs)
    //     return 0;
    // if(ps==="rock"){
    //     return (cs==="scissors" ? 1 : -1) 
    // }
    // if(ps==="")
    // return ps==='rock' ? (cs==="scissors" ? 1 : -1)  
}
function getMeWinner(playerSelection){
    let computerSelection = computerPlay()
    let winner = playRound(playerSelection,computerSelection)
    winner = winner === 0 ? 'Draw!' : (winner===1 ? 'Player won!' : 'Computer won!')

    // if(winner === 0 )
    //     winner = 'Draw'
    // else if(winner === 1)
    //     winner = 'Player won!'
    // else
    //     winner = 'Computer won!'

    return ({
        winner: winner,
        compMove: computerSelection
    })
}


function gameFinished(){
    if(playerScore===5 || computerScore===5){
        return true
    }
    return false
}

function whoWon(){
    if(gameFinished()){
        if(playerScore===5){
            message.innerText='Player is the winner! Congratulations!'
        }else{
            message.innerText = 'Computer is the Winner! You Lose!'
        }
    reset()
    }
}

function reset(){
    setTimeout(function(){
        playerScore = 0;
        computerScore = 0;
        compSelect.innerHTML=''
        playerSelect.innerHTML=''
        pScore.innerText = 0
        cScore.innerText = 0
        gameActive=false
        message.innerText = 'Choose rock, paper, or scissors to play again'
    },3000)
}

submit.addEventListener("click",displayBoards)

rock.addEventListener("click",gameFlow.bind(this,rock.id))
paper.addEventListener("click",()=>gameFlow(paper.id))
scissors.addEventListener("click",()=>gameFlow(scissors.id))