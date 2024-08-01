
function playGame() {
    let scores = { player: 0, computer: 0 };
    
    buttons.forEach(button => {
        hover(button, e => {
            e.target.setAttribute("style", "background-color: #7ebab5;");
        }, e => {
            e.target.setAttribute("style", "background-color: #454864;");
        });
    
        button.addEventListener('click', () => {
            const playerSelection = button.id.toUpperCase();
            playRound(playerSelection, scores);
            
            if (scores.player === 5 || scores.computer === 5) {
                alert("GAME OVER");
                // Reset scores if you want to play again
                endGame(scores);
            }
        });
    });
}
const buttons = document.querySelectorAll('.game-btn');

function hover(element, enter, leave){
    element.addEventListener('mouseenter', enter)
    element.addEventListener('mouseleave', leave)
  }
  function endGame(scores) {
    const resultDiv = document.querySelector('.result');
    resultDiv.innerHTML = '';  // Clear the result div

    const gameOverText = document.createElement('div');
    gameOverText.textContent = `GAME OVER! Final Score - You: ${scores.player}, Computer: ${scores.computer}`;
    gameOverText.style.padding = "10px 10px";
    resultDiv.appendChild(gameOverText);

    const playAgainButton = document.createElement('button');
    playAgainButton.textContent = 'Play Again?';
    playAgainButton.style.position = "absolute";
    playAgainButton.style.left = "50%";
    playAgainButton.style.transform = "translateX(-50%)";
    hover(playAgainButton, e => {
        e.target.style.backgroundColor = "#7ebab5";
    }, e => {
        e.target.style.backgroundColor = "#454864";
    });
    playAgainButton.addEventListener('click', resetGame);
    resultDiv.appendChild(playAgainButton);

    // Disable game buttons
    const gameButtons = document.querySelectorAll('.game-btn');
    gameButtons.forEach(button => button.disabled = true);
}

function resetGame() {
    const resultDiv = document.querySelector('.result');
    resultDiv.innerHTML = '';  // Clear the result div

    // Re-enable game buttons
    const gameButtons = document.querySelectorAll('.game-btn');
    gameButtons.forEach(button => button.disabled = false);

    // Start a new game
    playGame();
}


function playRound(playerSelection, scores){
    let computerSelection = randomizeChoice();
    const resultDiv = document.querySelector(".result");

    resultDiv.innerHTML = ''; //clear the divs
    

    const computerChoiceText = document.createElement("div");
    computerChoiceText.textContent = "The computer picked " + computerSelection;
    resultDiv.appendChild(computerChoiceText); // we add a line for the computer choice

    //Here starts the logic to determine who won
    let resultText;
    if (playerSelection === computerSelection){
        resultText = "TIE!";
    }
    if ((playerSelection == "ROCK" && computerSelection == 'SCISSORS')
    ||  (playerSelection == "SCISSORS" && computerSelection == 'PAPER')
    ||  (playerSelection == "PAPER" && computerSelection == 'ROCK')){
            scores.player++;
            resultText = "YOU WIN!";
    }
    if ((playerSelection == "ROCK" && computerSelection == 'PAPER')
        ||  (playerSelection == "SCISSORS" && computerSelection == 'ROCK')
        ||  (playerSelection == "PAPER" && computerSelection == 'SCISSORS')){
                scores.computer++;
                resultText = "YOU LOSE!";
        }
        const gameResultText = document.createElement("div");
        gameResultText.textContent = resultText + " your score: " + scores.player + " computer score: " + scores.computer;
        resultDiv.appendChild(gameResultText);
}

function randomizeChoice(){
    let choice = Math.floor(Math.random() * 3)
    switch (choice){
    case 0:
        return 'ROCK';
    case 1:
        return 'PAPER';
    case 2:
        return 'SCISSORS';
    }
}

playGame();