let computerScore = 0;
let humanScore = 0;

//Function to generate random number and use if else to print rock, paper , scissors.
function getComputerChoice() {
  const num = Math.floor(Math.random() * 3);
  // Here, the const num is generating random number b/w 1-3 with that formula.
  if (num === 0) {
    return "Rock";
  } else if (num === 1) {
    return "Paper";
  } else if (num === 2) {
    return "Scissors";
  }
  // Here, by using if else, i convert that random number into word like if that number generated, print this.
}

//Now Turn for the Human Choice.

function getHumanChoice() {
  const userChoice = prompt("Enter one of these: Rock, Paper, Scissors");
  if (userChoice === "Rock") {
    return "Rock";
  } else if (userChoice === "Paper") {
    return "Paper";
  } else if (userChoice === "Scissors") {
    return "Scissors";
  }
}


    //Now i declare the playround function, where popup on broswer appear and ask the input then it's check the condition and save the results.
function playRound(roundNumber) {
  console.log(`Round No: ${roundNumber}`);
  const human = getHumanChoice();
  const computer = getComputerChoice();
  // i declare these 2 constant to store value in varaible for final result.
  console.log(`You Choose ${human}`);
  console.log(`Computer Choose ${computer}`);
  if (human === computer) {
    return "It's a Tie!";
  } else if (
    (human === "Rock" && computer === "Scissors") ||
    (human === "Paper" && computer === "Rock") ||
    (human === "Scissors" && computer === "Paper")
  ) {
    console.log(`You Won, ${human} beats ${computer}`);
    humanScore++;
  } else if (
    (computer === "Rock" && human === "Scissors") ||
    (computer === "Paper" && human === "Rock") ||
    (computer === "Scissors" && human === "Paper")
  ) {
    console.log(`Computer Won, ${computer} beats ${human}`);
    computerScore++;
  }
}

(playRound(1));
(playRound(2));
(playRound(3));
(playRound(4));
(playRound(5));

console.log("---Final Score---");
console.log(`Your Score: ${humanScore}`);
console.log(`Computer Score: ${computerScore}`);

if (humanScore > computerScore) {
  console.log("Congrats, You Won the Game!");
} else if (computerScore > humanScore) {
  console.log("Hard Luck, Computer Won the Game!");
} else {
  console.log("It's a Tie!");
}
