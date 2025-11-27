//!Print all elements of an array
const arr = [10, "hussain", 20, 30, 40, 50, "ritu"];

//* using map function
arr.map((item) => {
  console.log(item);
});

//* using for loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
//* using forEach loop */
arr.forEach((item) => {
  console.log(item);
});

//* using for...of loop
for (const i of arr) {
  console.log(i);
}

//!what is the difference between all?
//?map function returns a new array after performing the operation on each element, whereas forEach does not return anything.
//?for loop and for...of loop are traditional looping constructs that allow more control over the iteration process, such as breaking out of the loop early.
//?for...of loop is specifically designed for iterating over iterable objects like arrays, while for loop can be used with any iterable or indexable structure.
