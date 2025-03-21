// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// make a variable called name, give it the value of dane
// if name is equal to Mary
// console.log 'Hi, Mary!'
//if name is not mary, console.log 'How do you do?'
//the console log will show 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// make a variable called secret 
// make a variable called code and give it the value 123
// if code is exactly 123, then secret is  'super', then code is equal to the current code times 2, giving code a new value 
//if code is greater than 250, then secret is 'duper'
//console.log the secret
//The console log will show 'super' and the new code will be 246.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// make a variable called isStudent and give it the value true
// make  a variable called age and give it the value 34
// make a variable called zip and give it the value 55407
//if isStudent is true and the zip code is greater than 80000
//console log 'you're a student on the west coast!'
//else, if isStudent is false or age is less than 30
// console log 'What are your hobbbies?'
//if isStudent is true
//console log 'Welcome  to prime!'
// if everything above is false, then console log 'How about the weather'
//the console log will show  'Welcome to prime!'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

//colorOne needs to be set to blue instead of red
//colorTwo needs to be set to red instead of blue

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// you also need to set colorTwo to purple 

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

//the instrustion didn't ask for constant time, it should be a let time 
/*
let temp = 40;
const time = 4;

// the condition should be and(&&) time, not or(||) time

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.


// the instrustion didn't ask for constant minAge, it should be a let minAge
/*
let age = 21;
const minAge = 21;

// the first log should be 'enter', then the second log should be 'no enter'
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

