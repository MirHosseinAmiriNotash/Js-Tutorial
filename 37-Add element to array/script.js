
const numbers = [3,4];
// numbers = [] - error
console.log(numbers);// [3, 4]
numbers.push(7,9);
console.log(numbers);// [3, 4, 7, 9] - Adds the element to the end of the array
numbers.unshift(4,2);
console.log(numbers);// [4, 2, 3, 4, 7, 9]- Adds the element to the beginning of the array
numbers.splice(2,0,"H" , "K");
console.log(numbers);//[4, 2, 'H', 'K', 3, 4, 7, 9]
numbers.splice(3,4,"f" , "s");
console.log(numbers);//[4, 2, 'H', 'f', 's', 9]