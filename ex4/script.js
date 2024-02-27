var randomNumber = Math.floor(Math.random() * 120) + 1;
var guesses = document.querySelector(".guesses");
var lastResult = document.querySelector(".lastResult");
var lowOrHi = document.querySelector(".lowOrHi");
var guessSubmit = document.querySelector(".guessSubmit");
var guessField = document.querySelector(".guessField");
var guessCount = 1;
var resetButton;

function checkGuess() {
  var userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Palpites anteriores: ";
  }

  guesses.textContent += userGuess + " ";

  if (userGuess === randomNumber) {
    lastResult.textContent = "Parabéns! pobre seu numero esta certo";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "FIM DE JOGO!!!";
    lowOrHi.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "Errado! tente de novo pobre acontece";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Seu palpite está muito baixo!";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Seu palpite está muito alto!";
    }
  }

  guessCount++;
  guessField.value = "";
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Iniciar novo jogo";
  document.body.appendChild(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  guessCount = 1;
  var resetParas = document.querySelectorAll(".resultParas p");
  for (var i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guess
}