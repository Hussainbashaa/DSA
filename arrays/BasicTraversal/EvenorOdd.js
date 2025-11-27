const arr = [10, 12, 23, 43, 54, 1, 67, 45, 98, 23, 223, 456, 2];

//* using map function
arr.map((item) => {
  item % 2 === 0 ? console.log(item, "is even ") : console.log(item, "is odd ");
});

//* for loop
let even = [];
let odd = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    even.push(arr[i]);
  } else {
    odd.push(arr[i]);
  }
}
console.log("Even array:", even);
console.log("Odd array:", odd);
