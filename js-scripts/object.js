const person = {
  first: "subash",
  last: "somu",
  age: 100,
};
console.log(person.first);
console.log(person.last);
console.log(person.age);
person.first = "tom";
person.last = "jerry";
console.log(person.first);
console.log(person.last);
person.last = null;
console.log(person.last);
const empty = {};
const point = { x: 10, y: 50 };
const point2 = { x: point.x, y: point.y + 1 };
const book = {
  "main title": "javascript",
  "sub-title": "guide to java script for beginners",
  for: "students",
  author: {
    first: "subash",
    last: "somu",
  },
};
console.log(book["main title"]);
console.log(book["sub-title"]);
console.log(book[" for"]);
console.log(book.author.first);
console.log(book.author.last);
console.log(book.for);
