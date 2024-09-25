let rlSync = require('readline-sync');

let number1 = Number(rlSync.question("enter the first number\n"));
let number2 = Number(rlSync.question("Enter the second number\n"));

let sum = number1 + number2;

console.log(`The sum of the two numbers is ${sum}`);