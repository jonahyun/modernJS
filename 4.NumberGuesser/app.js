/*
GAME FUNCTION
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify Player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game values
let min = 15,
    max = 19,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min an max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listern
game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again') {
    window.location.reload();
  }
});

// Listen for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  
  // Validate
  if(isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  // Check if won
  if(guess === winningNum) {
    // Game over - Won
    gameOver(true, `${winningNum} is correct, You win!`);

  } else {
    guessesLeft -= 1;
    if(guessesLeft === 0) {
      // Game over - Lost
      gameOver(false, `Game over, You lost. The correct number is ${winningNum}`)

    } else {
      // Game continues - answer 
      // Make border green
      guessInput.style.borderColor = 'red';

      // Clear input
      guessInput.value = '';

      // Tell user its the wrong number
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red')
    }
  }
}); 

// Game Over
function gameOver(won, msg) {
  let color;
  won === true ? color = 'green' : color = 'red';

  //Disable input
  guessInput.disabled = true;
  // Make border green
  guessInput.style.borderColor = color;
  // Set text color
  message.style.color = color;
  // Set message
  setMessage(msg);

  // Play again
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';

}

// Get winning number
function getRandomNum(min, max) {
  return Math.floor(Math.random()*(max - min + 1)+min);
}


// Set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}