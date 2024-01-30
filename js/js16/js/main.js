const confirmPlay = () => {
  return confirm("Will you play?");
};

const confirmPlayAgain = () => {
    return confirm("Will you play again?");
  };

const getPlayerChoice = () => {
  return prompt("Please choose rock, paper, or scissors!");
};

const formatPlayerChoice = (playerChoice) => {
  return playerChoice.trim().toLowerCase();
};

const randomComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let computerChoice =
    randomNumber === 1 ? "rock" : randomNumber === 2 ? "scissors" : "paper";
};

const resultOfPlay = (playerChoice, computerChoice) => {
  switch (playerChoice) {
    case "scissor":
      if (computerChoice === "paper") return "Win!";
      else if (computerChoice === "rock") return "Lose!";
      break;
    case "rock":
      if (computerChoice === "paper") return "Lose!";
      else if (computerChoice === "scissors") return "Win!";
      break;
    case "paper":
      if (computerChoice === "rock") return "Lose!";
      else if (computerChoice === "scissors") return "Win!";
      break;
    default:
      return "Tie Game!";
  }
};

const wrongFormat = () => {
  alert("Wrong Format!");
};

const nextTime = () => {
  alert("Maybe next time");
};

let playGame = confirmPlay();
while (playGame) {
    let computerChoice = randomComputerChoice();
    let playerChoice = formatPlayerChoice(getPlayerChoice());
    alert(resultOfPlay(playerChoice, computerChoice));
    playGame = confirmPlayAgain();
    if (!playGame) nextTime();
}

