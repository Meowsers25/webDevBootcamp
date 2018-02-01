var num = 8;
var guess = Number(prompt("Guess the number between one and ten..."));

if (guess < 0 || guess > 10) {
    console.log("Please pick a valid number");
}
else if (guess < num) {
    console.log("Too low, pick again...");
}
else if (guess > num) {
    console.log("Too high, guess again...");
}
else {
    console.log("You guessed correctly, Grasshopper");
}

//Number() allows you to work with numerical values
//Rather than use it in every if statement, use it one
//time before the prompt