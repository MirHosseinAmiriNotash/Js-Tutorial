//  const numbers = [1 , 3 , 5 , 7];


// const result =  numbers.map(function(value){
//    return value * 2;
//  });

// console.log(result);

 // [2, 6, 10, 14]

 const products = ['html' , 'css' , 'js'];
 
//  const result = products.map(function(product){
//     return `<li>${product}</li>`
//  });

//  console.log(result);


//  const html = `<ul>${result.join('')}</ul>`; 

//  console.log(html);


// const result = products.map(function(product){
//   const obj = {value : product};
//   return obj;
// });
// const result = products.map(function(product){
//     return {value : product};
//   });

// const result = products.map(product=> ({value : product}));
// console.log(result);

const numbers = [1,-1,2,3];


// const items = numbers.filter(v => v>=0).map(n => ({value : n}));
const items =
 numbers
 .filter(v => v>=0)
 .map(n => ({value : n}));
 
console.log(items);