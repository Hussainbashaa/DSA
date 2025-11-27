//! Find the largest element in an array
const arr = [10, 12, 23, 43, 54, 1, 67, 45, 98, 23, 223, 456, 2];

let largest = arr[0];

//* using map function
arr.map((item) => {
  if (item > largest) {
    largest = item;
  }
});
console.log("The largest element in the array is:", largest);

//* for loop
let largestElement = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largestElement) {
    largestElement = arr[i];
  }
}
console.log("the largest element is", largestElement);
