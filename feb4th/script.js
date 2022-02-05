const submit = document.getElementById("submit");
const game = document.querySelector(".game");
const details = document.querySelector(".details");
const message = document.querySelector(".message");

let player1 = "";
let player2 = "";
let playGame = true;
let activePlayer = 0;
// 0 for player 1 and 1 for player 2

function showMessage(msg) {
  message.innerHTML = `<h3> ${msg}</h3>`;
}

function updateActivePlayer(){
    if(activePlayer===0)
        activePlayer=1
    else
        activePlayer=0
}

function initializeGame() {
  player1 = document.getElementById("player1").value;
  player2 = document.getElementById("player2").value;

  activePlayer = 0;

  details.style.display = "none";
  game.style.display = "flex";

  // Append game-slots to game div
  showMessage(`${activePlayer === 0 ? player1 : player2}, you're up`);

  for (let i = 1; i <= 9; i++) {
    const div = document.createElement("div");

    div.id = i;
    div.classList.add("game-slot");

    // Add event listener for clicking
    div.addEventListener("click", function () {

      if(!div.innerText && playGame){
        div.innerText = activePlayer === 0 ? "x" : "o";
        const winner = checkWinner()

        if(!winner){
          updateActivePlayer();
          showMessage(`${activePlayer === 0 ? player1 : player2}, you're up`)
        }else{
          showMessage(`${activePlayer===0 ? player1: player2}, congratulations you won!`)
        }
      }


    });

    game.appendChild(div);
  }
}

const winningSequences = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
function checkWinner(){
    let winnerBool = false

    for(let i=0;i<winningSequences.length;i++){
      const winningCombo = winningSequences[i];

      const cell1 = document.getElementById(winningCombo[0]+1)
      const cell2 = document.getElementById(winningCombo[1]+1)
      const cell3 = document.getElementById(winningCombo[2]+1)

      const val1 = cell1.innerText
      const val2 = cell2.innerText
      const val3 = cell3.innerText

      if(val1===val2 && val2===val3 && val1!=''){
        winnerBool = true
        playGame = false
        cell1.style.backgroundColor="purple"
        cell2.style.backgroundColor="purple"
        cell3.style.backgroundColor="purple"
        break;
      }
    }
    return winnerBool
}

submit.addEventListener("click", initializeGame);
