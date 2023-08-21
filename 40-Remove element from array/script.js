
const numbers = [1,2,3,4];

// numbers.pop();
// console.log(numbers);// [1, 2, 3]



// const last = numbers.pop();
// console.log(numbers);// [1, 2, 3]
// console.log(last);// 4 - The element removed from the array



// const first = numbers.shift();
// console.log(numbers);// [2, 3, 4]
// console.log(first);// 1


// const result = numbers.splice(2,1);
// console.log(numbers);// [1, 2, 4]
// console.log(result);// [3]

const result2 = numbers.splice(2,2);
console.log(numbers);// [1, 2]
console.log(result2);// [3, 4]


