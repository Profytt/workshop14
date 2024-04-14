// # Unit2.Stats.Starter
// # Unit2.Stats.Starter

// In this project, you will be building out the functionality of a simple app that asks a user for some numbers and then calculates some statistics according to the user's input.

// ## Instructions

// 1. Fork this repository and then clone it down to your own computer.
// 2. Open the project in VS Code.
// 3. Live serve `index.html`. You should be greeted with a prompt.
// 4. Complete the functions described in `index.js`!

// ## Submission

// Submit a link to your Github repo.
//  12 changes: 12 additions & 0 deletions12  
// index.html
// @@ -0,0 +1,12 @@
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Stats</title>
  </head>
  <body>
    <h1>Look at the console :)</h1>
    <script src="index.js"></script>
  </body>
</html>
 82 changes: 82 additions & 0 deletions82  
index.js
@@ -0,0 +1,82 @@
// Prompt the user for a list of integers separated by commas.
const numberString = prompt(
  "Please enter some integers separated by commas.",
  "1,2,3,4,5"
);

// Split the string of numbers into an array of strings.
const numberStrings = numberString.split(",");

// Convert the array of strings into an array of numbers.
const numbers = [];
for (const str of numberStrings) {
  numbers.push(parseInt(str));
}

// Peform some calculations on the numbers.
console.log(numbers);
console.log(`You have given ${getLength(numbers)} numbers.`);
console.log(`The median of your numbers is ${getMedian(numbers)}.`);
console.log(`The sum of your numbers is ${getSum(numbers)}.`);
console.log(`The mean of your numbers is ${getMean(numbers)}.`);
console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
console.log(`The largest of your numbers is ${getMax(numbers)}.`);
console.log(`The range of your numbers is ${getRange(numbers)}.`);

// Complete the functions below to make the program work!

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */
function getLength(numbers) {
  return numbers.length;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the median of the numbers
 */
function getMedian(numbers) {
  const sortedNumbers = numbers.sort((a,b) => a - b);
  const middleIndex = Math.floor(numbers.legth /2);
  return numbers.length % 2 === 0
  ? (sortedNumbers[middleIndex] + sortedNumbers[middleIndex + 1]) / 2
  : sortedNumbers[middleIndex];
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */
function getSum(numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the mean of the numbers
 */
function getMean(numbers) {
  return getSum(numbers) / getLength(numbers);
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the smallest of the numbers
 */
function getMin(numbers) {
  return Math.min(...numbers.sort());
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the largest of the numbers
 */
function getMax(numbers) {
  return Math.max(...numbers.sort());
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the range of the numbers (max - min)
 */
function getRange(numbers) {
  return getMax(numbers) - getMin(numbers);
}