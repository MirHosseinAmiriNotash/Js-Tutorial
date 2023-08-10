//value types(primitive)
//Number
//String
//Boolean
//Symbol
//undifined
//null

//Reference types
//object
//function
//array

// let x = 10;
// let y = x;

// x = 20;

// console.log(x);
// console.log(y);



// let x = {value : 10}
// let y = x;

// x.value = 20;

// console.log(x);
// console.log(y);


// let number = 10;
// function increase(number){
//     number++;
//     //number = number +1 ;
// }
// increase(number);
// console.log(number);


let obj = {value : 10};

function increase(obj){
    obj.value++;
}
increase(obj);
console.log(obj);