//have a secretnumber
var num = 8;
var guess = Number(prompt("Guess the number"));
//check its boundaries
if (guess < num) {
    alert("Too low, try again!");
    guess = prompt("Guess the number");
} else if (num === guess) { // == coz, prompt takes input as string or 
    //do num ===Number(guess)
    alert("You guessed it right!");

} else if (guess > num) {
    alert("Too high, try again!");
    guess = prompt("Guess the number");
} else {
    alert("please choose a positive number");
    guess = prompt("Guess the number");
}