"use strict";

function range(upper) {
    return [...Array(upper).keys()];
}

for (const i of range(3)) {
    console.log(i);
}

const fruit = ['apple', 'orange', 'grapefruit'];
const moreFruit = ['mango', 'banana', 'plum'];

console.log(fruit.join(', '));
console.log(fruit.indexOf('mango'));
console.log(fruit.indexOf('apple'));

console.log(fruit.concat(moreFruit).join(', '));
