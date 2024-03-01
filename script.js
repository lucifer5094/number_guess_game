// Generate random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;

function checkGuess() {
  const userGuess = parseInt(document.getElementById('guessField').value);
  const message = document.getElementById('message');

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.textContent = 'Please enter a valid number between 1 and 100.';
    return;
  }

  guessCount++;

  if (userGuess === randomNumber) {
    message.textContent = `Congratulations! You guessed the correct number ${randomNumber} in ${guessCount} guesses!`;
    disableInput();
  } else if (userGuess < randomNumber) {
    message.textContent = 'Too low. Try again.';
  } else {
    message.textContent = 'Too high. Try again.';
  }
}

function resetGame() {
  guessCount = 0;
  document.getElementById('guessField').value = '';
  document.getElementById('message').textContent = '';
  enableInput();
  randomNumber = Math.floor(Math.random() * 100) + 1;
}

function disableInput() {
  document.getElementById('guessField').disabled = true;
}

function enableInput() {
  document.getElementById('guessField').disabled = false;
}
