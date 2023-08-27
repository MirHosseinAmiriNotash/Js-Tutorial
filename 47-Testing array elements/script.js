const numbers = [1,2,3];
const numbers2 = [1,-1,2,3];


// numbers.every(function(value,index,array){

// });

// const allPositive = numbers.every(function(value){
//   return value >= 0;
// });

// const allPositive2 = numbers2.every(function(value){
//     return value >= 0;
//   });

// console.log(allPositive);// true
// console.log(allPositive2);// false

const atLeastOnePositive = numbers2.some(function(value){
   return value>=0;
});

console.log(atLeastOnePositive);// true