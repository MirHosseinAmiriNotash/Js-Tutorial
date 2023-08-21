
//primitive types
// const numbers = [1,2,3,1,4,1,1];
// console.log(numbers.indexOf(1));// 0
// console.log(numbers.indexOf(3));// 2
// console.log(numbers.indexOf(5));// -1 - Because the number 5 does not exist in the array

// console.log(numbers.lastIndexOf(1));// 6


// // if(numbers.lastIndexOf(7) !== -1){
// //     console.log('yes');
// // }else{
// //     console.log('No!');
// // }


// if(numbers.includes(8)){
//     console.log('yes');
// }else{
//     console.log('No!');
// }

// console.log(numbers.indexOf(1,1));//3


// reference types

const courses = [
    {id : 1 , name : 'a'} , 
    {id : 2 , name : 'b'}
]

// console.log(courses.includes({id : 1 , name : 'a'}));//false

const result = courses.find(function(course){
    return course.name === "a"
})

console.log(result);//{id : 1 , name : 'a'}

const result2 = courses.find(function(course){
    return course.id === 2;
})

console.log(result2);// {id : 2 , name : 'b'}

const result3 = courses.find(function(course){
    return course.id === 3;
})

console.log(result3);// undefined

const result4 = courses.find(function(course){
    return course.id === 1 || course.name === "a";
})

console.log(result4);// {id: 1, name: 'a'}


const result5 = courses.find(function(course){
    return course.id === 1 && course.name === "b";
})

console.log(result5);// undefined


const result6 = courses.findIndex(function(course){
    return course.id === 2;
})

console.log(result6);// 1

const result7 = courses.findIndex(function(course){
    return course.id === 3;
})

console.log(result7);// -1

const result8 = courses.findIndex(function(course){
    return course.name === "a";
})

console.log(result8);// 0