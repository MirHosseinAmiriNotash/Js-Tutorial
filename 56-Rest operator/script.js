
// function sum(args){
// console.log(args);
// }

// console.log(sum(1,2,3,4,5,17));


// function sum(...args){
//     console.log(args);
//     }
    
//     console.log(sum(1,2,3,4,5,17));// 1

// function sum(...args){
//     return args.reduce((a,b)=> a+b );
// }
    
//     console.log(sum(1,2,3,4,5,17));// 32



function sum(discount , ...args){
    const total =  args.reduce((a,b)=> a+b );
    return total * (1 - discount);
}
    
    console.log(sum(0.5 , 1,2,3,4,5,17));// 16