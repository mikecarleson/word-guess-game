var alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "x",
  "y",
  "z"
];

var guesses = 9;
var guessesSoFar = [];
var wins = 0;
var losses = 0;
var left = 9;
var randomLetter;

var newGame = function() {
	guessesSoFar = [];
	left = 9;
	newLetter();
	guessesLeft();
	soFar();
  };
  
var guessesLeft = function() {
	document.getElementById("guesses").innerHTML = "Guesses Left: " + left;
  };

var soFar = function() {
  document.getElementById("soFar").innerHTML =
    "Your Guesses so far: " + guessesSoFar.join(",");
};


var newLetter = function() {
  randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
  alert("A new Letter has been chosen");
};


document.onkeyup = function(event) {
  var userGuess = event.key;
  left--;
  guessesSoFar.push(userGuess);
  soFar();
  guessesLeft();
  if (left > 0) {
    if (userGuess == randomLetter) {
      wins++;
      document.getElementById("wins").innerHTML = "Wins:" + wins;
      newGame();
    }
  } else if (left == 0) {
    losses++;
    document.getElementById("losses").innerHTML = "Losses:" + losses;
    newGame();
  }
};
