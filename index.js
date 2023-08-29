const readline = require('readline-sync');

// below is an example of how to ask a user for information
const name = readline.question('What is your name?');
console.log("Hello " + name + "!");

// the respones you get is a string. We need to convert that over to a number
const ageStr = readline.question('How old are you?');
const age = parseInt(ageStr);
console.log("You are " + age + " years old");
