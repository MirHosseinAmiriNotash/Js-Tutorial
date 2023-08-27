// const numbers = [1,-1,2,3];

// const filtered = numbers.filter(function(value){
//   return value >=0 ;
// });

// const filtered = numbers.filter(value => value >=0);
// const filtered = numbers.filter(v => v >=0);

// console.log(filtered);// [1, 2, 3]

// [1,2,3]


const users = [
    {name : 'Hossein' , age : 18} ,
    {name : 'Hossein' , age : 27} ,
    {name : 'Hossein' , age : 16} ,
    {name : 'Hossein' , age : 14} ,
    {name : 'Hossein' , age : 20} ,
]


const result = users.filter(user => user.age >= 18);
console.log(result);