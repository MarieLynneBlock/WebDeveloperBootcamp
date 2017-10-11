// Create secret number
var secretNumber = 4;


// Ask user for guess
var guess = Number(prompt("Guess a number"));


// Check guess:

	// Right
if (guess === secretNumber) {
	alert("You got it Right!!!");
}

	// Wrong - Check if too High
else if (guess > secretNumber) {
	alert("Too High. Guess again!");
}

	// Wrong - Check if too Low
else {
	alert("Too low. Guess again!");
}