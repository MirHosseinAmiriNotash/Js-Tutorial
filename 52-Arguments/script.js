

// function sum(a,b){
//     console.log(arguments);
//     return a+b;
// }

// console.log(sum(3,2));//5

// console.log(sum(3));// NaN

// console.log(sum());// NaN

// console.log(sum(3,2,4,5,6,4,8));//3

function sum(a,b){
    console.log(arguments);
    let total = 0;
    for(let value of arguments){
        total += value;
    }
    return total;
}

console.log(sum(3,2,4,5,6,4,8));//32