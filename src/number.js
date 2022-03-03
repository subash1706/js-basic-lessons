/* eslint-disable prefer-const */
/* eslint-disable quotes */
/* eslint-disable no-undef */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
const age = 100;
const money = 1000.5;
console.log(typeof age);
console.log(typeof money);
console.log(10 - 3);

console.log(Math.round(2.2));
console.log(Math.floor(5.6));
console.log(Math.ceil(8.4));
console.log(Math.random());

const sweets = 20;
const kids = 3;
const eachkidsgets = Math.floor(sweets / kids);
console.log(eachkidsgets);
const leftsweets = sweets % kids;
console.log(leftsweets);

let x = 2 ** 3;
console.log(x);
x = Math.pow(2, 3);
console.log(x);

console.log(0.1 + 0.4);

console.log(0.2 + 0.1);
// let costofproduct = 100.95;
// let costofproduct = 10095;in paise.

console.log(typeof Infinity);
console.log(typeof -Infinity);
let result = 10 / "hello";
console.log(typeof NaN);

// CHECK THE DATATYPE OF A  VALUE
x = 100;
result = Number.isInteger(x);
let y = "abcd";
result = Number.isInteger(y);
console.log(`is y a number: ${result}`);
let flag = true;
result = typeof flag === "boolean";
console.log(`is flag a boolean: ${result}`);
let nos = [1, 2, 3, 4, 5];
result = typeof nos === "object";
console.log(`is x an object: ${result}`);
