let randomNumber;
let attemptsLeft;
let maxAttempts;

function startGame() {
  const difficulty = document.getElementById("difficulty").value;
  maxAttempts = difficulty === "easy" ? 10 : 5;
  attemptsLeft = maxAttempts;
  randomNumber = Math.floor(Math.random() * 100) + 1;

  document.getElementById("gameArea").style.display = "block";
  document.getElementById("feedback").textContent = "";
  document.getElementById("attemptsDisplay").textContent = `You have ${attemptsLeft} attempts remaining.`;
  console.log("Answer (for testing):", randomNumber);
}

function makeGuess() {
  const guess = parseInt(document.getElementById("guessInput").value);
  if (isNaN(guess)) {
    document.getElementById("feedback").textContent = "Please enter a valid number.";
    return;
  }

  if (guess < randomNumber) {
    document.getElementById("feedback").textContent = "Too low!";
    attemptsLeft--;
  } else if (guess > randomNumber) {
    document.getElementById("feedback").textContent = "Too high!";
    attemptsLeft--;
  } else {
    document.getElementById("feedback").textContent = `Correct! The number was ${randomNumber}.`;
    return;
  }

  if (attemptsLeft == 0) {
    document.getElementById("feedback").textContent = `Out of attempts! You lose. The number was ${randomNumber}.`;
    document.getElementById("gameArea").style.display = "none";
  } else {
    document.getElementById("attemptsDisplay").textContent = `You have ${attemptsLeft} attempts remaining.`;
  }
}
