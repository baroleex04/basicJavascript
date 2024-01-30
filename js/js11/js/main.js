// Your FIrst Interactive Game
let playGame = confirm("Shall we play rock, paper, scissor?");
if (playGame) {
  //play
  let playerChoice = prompt("Please enter rock, paper, or scissors.");
  if (playerChoice) {
    let playerOne = playerChoice.trim().toLowerCase();
    if (
      playerOne === "rock" ||
      playerOne === "paper" ||
      playerOne === "scissors"
    ) {
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer =
        computerChoice === 1
          ? "rock"
          : computerChoice === 2
          ? "paper"
          : "scissors";

      let result =
        playerOne === computer ? "Tie game!" : "One of you is loser!";
      alert(result);
      let playAgain = confirm("Play Again?");
      playAgain ? location.reload() : alert("Thanks for playing!");
    } else {
      alert("You didn't enter in correct format.");
    }
  } else {
    alert("I guest you change your mind. Maybe next time.");
  }
} else {
  alert("Ok, maybe next time.");
}