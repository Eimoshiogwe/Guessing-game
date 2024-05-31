let randomNumber = Math.floor(Math.random() * 100) + 1;
let remainingGuesses = 3;

const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const message = document.getElementById('message');

guessButton.addEventListener('click', function() {
  const guess = parseInt(guessInput.value);

  // Validate input
  if (isNaN(guess)) {
    message.textContent = 'Please enter a valid number!';
    return;
  }

  // Check guess
  if (guess === randomNumber) {
    message.textContent = `Congratulations! You guessed the number in ${3 - remainingGuesses} tries.`;
    guessButton.disabled = true;
  } else if (guess < randomNumber) {
    message.textContent = 'Number entered is too low! Guess higher.';
    remainingGuesses--;
  } else {
    message.textContent = 'Number entered is too high! Guess lower.';
    remainingGuesses--;
  }

  // Check remaining guesses
  if (remainingGuesses === 0) {
    message.textContent = `Sorry, you're out of guesses! The number was ${randomNumber}.`;
    guessButton.disabled = true;
  }

  // Clear input after each guess
  guessInput.value = '';
});
