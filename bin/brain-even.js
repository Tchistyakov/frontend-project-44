#!/usr/bin/env node

import readlineSync from "readline-sync";

export default () => {
  const userName = readlineSync.question("May I have your name? ");

  console.log("Hello, " + userName + "!");

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  console.log("Question: 15");

  const answer = readlineSync.question("Your answer: ", {
    trueValue: "no",
    falseValue: "yes",
  });
  if (answer === true) {
    console.log("Correct!");
  } else {
    return console.log(
      `'${answer}' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${userName}!`
    );
  }

  console.log("Question: 6");

  const answer2 = readlineSync.question("Your answer: ", {
    trueValue: "yes",
    falseValue: "no",
  });
  if (answer2 === true) {
    console.log("Correct!");
  } else {
    return console.log(
      `'${answer2}' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${userName}!`
    );
  }

  console.log("Question: 7");

  const answer3 = readlineSync.question("Your answer: ", {
    trueValue: "no",
    falseValue: "yes",
  });
  if (answer3 === true) {
    console.log("Correct!");
  } else {
    return console.log(
      `'${answer3}' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${userName}!`
    );
  }
  return console.log(`Congratulations, ${userName}!`);
};
