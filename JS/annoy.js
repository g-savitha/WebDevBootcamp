var answer = prompt("Are we there yet?");

while (answer.indexOf("yes") === -1) {
    answer = prompt("Are we there yet?");
}

alert("Finally! you made it :P");