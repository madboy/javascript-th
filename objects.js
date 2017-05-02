"use strict";

// const student = {
//     name: "Dave",
//     grades: [80, 85, 90, 96]
// };

const students = [
    {
        name: "apa",
        grades: [1, 2, 4]
    },
    {
        name: "apa",
        grades: [5, 6, 7]
    },
    {
        name: "napa",
        grades: [5, 6, 7]
    }
]

// for (const student of students) {
let matches = [];

for (var student in students) {
    if (students[student].name === 'napa') {
        matches.push(students[student]);
    }
}

console.log(matches);

