//! Find the smallest element in an array
const arr = [10, 12, 23, 43, 54, 1, 67, 45, 98, 23, 223, 456, 2];

let smallest = arr[0];

//* using map function
arr.map((item) => {
  if (item < smallest) {
    smallest = item;
  }
});
console.log("The largest element in the array is:", smallest);

//* for loop
let smallestElement = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < smallestElement) {
    smallestElement = arr[i];
  }
}
console.log("the smallest element is", smallestElement);
