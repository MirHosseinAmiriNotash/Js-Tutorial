let x = {};
console.log(x);
console.log(x.toString());

let y = {};
console.log(y);

Object.getPrototypeOf(x);
Object.getPrototypeOf(y);

console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y));//true
console.log(x.__poroto__ === y.__poroto__);//true
