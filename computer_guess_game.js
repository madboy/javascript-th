"use strict";

function randomInt(upper) {
    return Math.floor(Math.random() * upper) + 1;
}

let guess = randomInt(6);
const correct = randomInt(6);

while (true) {
    if (guess === correct) {
        console.log("Correct, the number was: ".concat(correct));
        break;
    } else if (guess > correct) {
        console.log("Too high");
    } else {
        console.log("Too low");
    }
    guess = randomInt(6);
}
