var choices = ['rock', 'paper', 'scissors'];

var round = 1;
var scores = [0, 0];

// game init function
function game() {
  while (round <= 5) {
    playRound(playerSelection, computerSelection);

    //generate computer choice from the array defined in line 1
    function computerPlay() {
      return choices[Math.floor(Math.random() * choices.length)];
    }

    // save computer selection in here
    var computerSelection = computerPlay();
    console.log(computerSelection);

    // prompt user for input and save it here and then convert it all to lowercase
    var playerChoice = prompt('Enter rock, paper or scissors');
    var playerSelection = playerChoice.toLowerCase();

    // now check conditions or game logic
    function playRound(playerSelection, computerSelection) {
      if (playerSelection === 'rock' && computerSelection === 'rock') {
        alert('tie');
        round++;
      }
      if (playerSelection === 'rock' && computerSelection === 'paper') {
        alert('You lose');
        scores[1]++;
        round++;
      }
      if (playerSelection === 'rock' && computerSelection === 'scissors') {
        alert('You win');
        scores[0]++;
        round++;
      }
      if (playerSelection === 'scissors' && computerSelection === 'rock') {
        alert('You lose');
        scores[1]++;
        round++;
      }
      if (playerSelection === 'scissors' && computerSelection === 'paper') {
        alert('You win');
        scores[0]++;
        round++;
      }
      if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        alert('tie');
      }
      if (playerSelection === 'paper' && computerSelection === 'rock') {
        alert('you win');
        scores[0]++;
        round++;
      }
      if (playerSelection === 'paper' && computerSelection === 'paper') {
        alert('tie');
      }
      if (playerSelection === 'paper' && computerSelection === 'scissors') {
        alert('you lose');
        scores[1]++;
        round++;
      }
    }

    if (scores[0] == 3) {
      alert('player 1 wins');
      break;
    } else if (scores[1] == 3) {
      alert('computer wins');
      break;
    }
  }
}
game();
