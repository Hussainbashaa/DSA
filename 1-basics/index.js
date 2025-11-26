//!adding two numbers
let a = 10;
let b = 20;
console.log(a + b);

//!subtraction of two numbers
let c = 30;
let d = 15;
console.log(c - d);

//!multiplication of two numbers
let e = 5;
let f = 4;
console.log(e * f);

//!division of two numbers
let g = 40;
let h = 8;
console.log(g / h);

//!adding a string and number or concatenation
let aa = 10;
let bb = "20";
console.log(aa + bb); //1020
//?type of operator
console.log(typeof (aa + bb)); //string

//!adding two number with sentence
let cc = 20;
let dd = 6;
console.log("sum od two number is" + cc + dd); //sum od two number is206
//*reason?
//  "sum od two number is" is a string which is concatenated with cc(20)  which become a string "sum od two number is20"
//   and then this string is concatenated with dd(6) which become "sum od two number is206"
//* outputs? because + operator is used for concatenation
// //?type of operator
// console.log(typeof("sum od two number is"+cc+dd)) //string
// //*to avoid this we can use , instead of +
// console.log("sum od two number is",cc+dd) //sum od two number is 26
// //?type of operator
// console.log(typeof("sum od two number is",cc+dd)) //number
console.log(cc + dd + "is the sum of two number"); //26is the sum of two number
//*reason?
// first cc and dd are added because + operator is between two numbers so 20+6=26
// then this result 26 is concatenated with the string "is the sum of two number" which become "26is the sum of two number"
//?type of operator
console.log(typeof (cc + dd + "is the sum of two number")); //string
//*to avoid this we can use , instead of +
console.log(cc + dd, "is the sum of two number"); //26 is the sum of two number

let age = prompt("Enter your age"); //20
console.log(age); //20
console.log(typeof age); //string
//*reason? prompt always takes input as string even if we enter number it will be taken as string
//!to convert string to number we can use Number()
let age1 = Number(prompt("Enter your age")); //20
console.log(age1); //20
console.log(typeof age1); //number

//what happen if we use any special character or alphabet other than number in prompt
let age2 = Number(prompt("Enter your age")); //abc
console.log(age2); //NaN
console.log(typeof age2); //number   (typeof NaN is number)
//*reason? when we use any special character or alphabet other than number in prompt and convert it into number using Number() it will return NaN(Not a Number) but the type will be number
