
function playGame(){
    let scores = { player: 0, computer: 0 };

    // while (scores.player < 5 && scores.computer < 5) {
    // let playerSelection = prompt("Make your choice: ROCK, PAPER, SCISSORS");
    // playRound(playerSelection, scores);
    // }
    // alert("GAME OVER");
}
let scores = { player: 0, computer: 0 };
const buttons = document.querySelectorAll('.game-btn');

function hover(element, enter, leave){
    element.addEventListener('mouseenter', enter)
    element.addEventListener('mouseleave', leave)
  }

  buttons.forEach(button => {
    hover(button, e => {
        // On hover
        e.target.setAttribute("style", "background-color: #7ebab5;");
    }, e => {
        // On exit hover
        e.target.setAttribute("style", "background-color: #454864;");
    });

    button.addEventListener('click', () => {
        const playerSelection = button.id.toUpperCase();
        playRound(playerSelection, scores);
    });
});

function playRound(playerSelection, scores){
    let computerSelection = randomizeChoice();
    const resultDiv = document.querySelector(".result");

    resultDiv.innerHTML = ''; //clear the

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
//Studiati getElementById, addEventListener, handleClick