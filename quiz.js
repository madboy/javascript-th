"use strict";

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const Quiz = function(question, answer) {
    this.question = question;
    this.answer = answer;
};

function showAnswer(answers, quiz, counter) {
    if (answers[counter] === 0) {
            console.log(`Wrong answer on: ${quiz[counter].question}. Correct was ${quiz[counter].answer}`);
        
    }
    counter++;
    if (counter === answers.length) {
        return 0;
    } else {
        showAnswer(answers, quiz, counter);
    }
}

const results = (answers, quiz) => {
    const correct = answers.reduce(function(a, b) {
        return a + b;
    }, 0);

    showAnswer(answers, quiz, 0);

    if (correct === 5) {
        return [correct, "gold crown"];
    } else if (correct > 2) {
        return [correct, "silver crown"];
    } else if (correct > 0) {
        return [correct, "bronze crown"];
    } else {
        return [correct, "dust mote"]
    }
}

const capital = new Quiz("Captial of Sweden", "stockholm");
const population = new Quiz("Population of Sweden", "9000000");
const county = new Quiz("In which county do you find Falun", "dalarna");
const music = new Quiz("Bjorn was a member of which music group", "abba");
const politician = new Quiz("Politician that got shot in the 80s", "palme");

let quiz = [capital, population, county, music, politician];
let answers = Array(quiz.length).fill(0);
let counter = 0;

const quizRunner = function() {
    if (counter === quiz.length) {
        const result = results(answers, quiz);
        console.log(`You got ${result[0]} answers correct! Here have a ${result[1]}.`);
        return rl.close();
    }
    rl.question("".concat(quiz[counter].question, "? "), (answer) =>
    {
        if (answer.toString().trim().toLowerCase() === quiz[counter].answer) {
            answers[counter] = 1;
        }
        counter++;
        quizRunner();
    });
}

quizRunner();
