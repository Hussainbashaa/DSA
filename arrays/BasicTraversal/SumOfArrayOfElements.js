const arr = [23, 54, 6, 712, 3, 6, 87, 98, 9];
//?explanation
// In this code, we have an array of numbers called 'arr'. We want to calculate the sum of all the elements in this array.
// We use the 'reduce' method of the array, which takes a callback function and an initial value (0 in this case).
// The callback function takes two parameters: 'accumulator' and 'currentValue'.
// 'accumulator' holds the accumulated sum as we iterate through the array, and 'currentValue' is the current element being processed.
// For each element in the array, we add the 'currentValue' to the 'accumulator'.
// Finally, we log the result to the console, which gives us the total sum of all elements in the array.

//?simple example:in words
// Let's say we have an array of numbers: [1, 2, 3].
// We want to find the sum of these numbers.
// We start with an initial sum of 0.
// We take the first number (1) and add it to our initial sum (0 + 1 = 1).
// Next, we take the second number (2) and add it to our current sum (1 + 2 = 3).
// Then, we take the third number (3) and add it to our current sum (3 + 3 = 6).
// So, the total sum of the array [1, 2, 3] is 6.

//! Using reduce method
const op = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(op);

//! Manual traversal method
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr.length !== 0) {
    sum += arr[i];
  }
}
console.log(sum);
