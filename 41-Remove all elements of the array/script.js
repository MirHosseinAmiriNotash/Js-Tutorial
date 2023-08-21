// const numbers = [1,2,3,4];

// numbers = []; // error

// let numbers = [1,2,3,4];
// let another = numbers;

// numbers = [];

// console.log(numbers);// []
// console.log(another);// [1, 2, 3, 4]


// let numbers = [1,2,3,4];
// let another = numbers;

// numbers.length = 0;

// console.log(numbers);// []
// console.log(another);// []


let numbers = [1,2,3,4];
let another = numbers;

numbers.splice(0,numbers.length);

console.log(numbers);// []
console.log(another);// []
