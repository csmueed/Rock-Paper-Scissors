const start = document.querySelector('#start');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const results = document.querySelector('.results');
const info = document.querySelector('.info');

let humanScore = 0;
let computerScore = 0;
let rounds = 0;
let Tie = 0;

function playGame() {
  start.addEventListener('click', function(e) {
    startGame();
  });
}
playGame(); 

function startGame() {
  humanScore = 0;
  computerScore = 0;
  rounds = 0;
  info.textContent = "Game Started: Choose Rock, Paper, or Scissors";

  rock.addEventListener('click', () => selectClick('rock'));
  paper.addEventListener('click', () => selectClick('paper'));
  scissors.addEventListener('click', () => selectClick('scissors'));
}

function getComputerChoice() {
  const choice = Math.floor((Math.random() * 3) + 1);
  if (choice === 1) {
    return 'rock';
  }
  if (choice === 2) {
    return 'paper';
  }
  if (choice === 3) {
    return 'scissors';
  }
}

// this replaces getHumanChoice() and playRound() in one call per click
function selectClick(humanChoice) {
  if (rounds >= 5) return;

  const computer = getComputerChoice();

  info.textContent = `You Chose: ${humanChoice}, Computer Chose: ${computer}\n`;

  if (humanChoice === computer) {
    results.textContent = "It's a Tie\n";
    Tie++;
  } else if (
    (humanChoice === "rock" && computer === "scissors") ||
    (humanChoice === "paper" && computer === "rock") ||
    (humanChoice === "scissors" && computer === "paper")
  ) {
    results.textContent = "You Win this Round\n";
    humanScore++;
  } else {
    results.textContent = "Computer Wins this Round\n";
    computerScore++;
  }

  rounds++;

  if (rounds === 5) {
    results.textContent = `\nFinal Score: You ${humanScore}, Computer ${computerScore}, Numbers of Tie ${Tie}.\n`;

    if (humanScore === computerScore) {
      results.textContent += "It's a Tie!";
    } else if (humanScore > computerScore) {
      results.textContent += "Congrats, You won this Game!";
    } else {
      results.textContent += "Hard Luck, Computer won this Game!";
    }
  }
}
