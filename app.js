const game = () => {

  let pScore = 0;
  let cScore = 0;

  const playMatch = () => {

    const options = document.querySelectorAll(".options button");
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {

      option.addEventListener("click", function() {

        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];        

        compareHands(this.textContent, computerChoice);

      });
    }); 
  };

  const compareHands = (playerChoice, computerChoice) => {
    //update text
    const winner = document.querySelector(".winner");
    //check for tie
    if(playerChoice === computerChoice) {
      winner.textContent = "It is a tie";
      return;
    }
    //check for rock
    if(playerChoice === "rock") {
      if(computerChoice === "scissors") {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        firstToFive();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        firstToFive();
        return;
      }
    }
    //check for paper    
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        firstToFive();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        firstToFive();
        return;
      }
    }
    //check for scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        firstToFive();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        firstToFive();
        return;
      }
    }
  }

  const updateScore = () => {

    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;

  };

  const firstToFive = () => {
    const optionsFadeOut = document.querySelector(".options");
    const winnerMatch = document.querySelector(".winnerMatch");
    if (pScore == 5) {
      winnerMatch.textContent = "Player won the game!";
      optionsFadeOut.classList.add("fadeOut");
    } else if (cScore == 5) {
      winnerMatch.textContent = "Computer won the game!"
      optionsFadeOut.classList.add("fadeOut");
    }
  }

  const resetGame = document.querySelector(".reset-score");
  const playerScoreReset = document.querySelector(".player-score p");
  const computerScoreReset = document.querySelector(".computer-score p");
  const optionsFadeOutReset = document.querySelector(".options");
  const winnerMatchText = document.querySelector(".winnerMatch");
  const winnerText = document.querySelector(".winner");

  resetGame.addEventListener("click", () => {
    playerScoreReset.textContent = 0;
    computerScoreReset.textContent = 0;
    winnerMatchText.textContent = "First to 5 wins the game!";
    winnerText.textContent = "Choose an option";
    pScore = 0;
    cScore = 0;
    optionsFadeOutReset.classList.remove("fadeOut")
  });
  
  playMatch();
};
game();