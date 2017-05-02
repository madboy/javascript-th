"use strict"

const getRandomNumber = (lower, upper) => {
    if (isNaN(lower) || isNaN(upper)) {
        throw new Error("User submitted invalid values");
        return "I can only work with numbers";
    }
    return Math.floor(Math.random() * (upper - lower + 1) + lower);
}

console.log(getRandomNumber(-10, 1));
console.log(getRandomNumber("i", 1));
console.log(getRandomNumber(-10, "apa"));
