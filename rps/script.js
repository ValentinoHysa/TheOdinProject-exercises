
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

const linkButton = document.querySelector(".buttons");

function hover(element, enter, leave){
    element.addEventListener('mouseenter', enter)
    element.addEventListener('mouseleave', leave)
  }

  buttons.forEach(button => {
    hover(button, e => {
        // On hover
        e.target.setAttribute("style", "background-color: #bd93f9;");
    }, e => {
        // On exit hover
        e.target.setAttribute("style", "background-color: #3882f6;");
    });

    button.addEventListener('click', () => {
        const playerSelection = button.id.toUpperCase();
        playRound(playerSelection, scores);
    });
});

function playRound(playerSelection, scores){
    let computerSelection = randomizeChoice();
    const myDiv = document.querySelector(".result");
    const content = document.createTextNode("The computer picked " + computerSelection); //TODO: How to make it go to a new line
    // content.setAttribute = ("style", "color: #white;"); //TODO: fix
    myDiv.appendChild(content);
    
    if (playerSelection === computerSelection){
        alert("TIE, your score: " + scores.player + " computer score: " + scores.computer);
    }
    if ((playerSelection == "ROCK" && computerSelection == 'SCISSORS')
    ||  (playerSelection == "SCISSORS" && computerSelection == 'PAPER')
    ||  (playerSelection == "PAPER" && computerSelection == 'ROCK')){
            scores.player++;
            alert("YOU WIN, your score: " + scores.player + " computer score: " + scores.computer);
    }
    if ((playerSelection == "ROCK" && computerSelection == 'PAPER')
        ||  (playerSelection == "SCISSORS" && computerSelection == 'ROCK')
        ||  (playerSelection == "PAPER" && computerSelection == 'SCISSORS')){
                scores.computer++;
                alert("YOU LOSE, your score: " + scores.player + " computer score: " + scores.computer);
        }
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