
//logical AND
// &&
console.log(true && true && true);//true
console.log(true && false && true);//false
//example
let ProductCount = 3;
let ProductPrice = 1000;

let credit = 1200;
let buy = ProductCount > 0 && credit > ProductPrice ;
console.log(buy);

//logical OR
// ||
console.log(true || true || true);//true
console.log(true || false || true);//true
console.log(false || false || false);//false
//not(Convert true to false and vice versa)
// !
console.log(!buy);
