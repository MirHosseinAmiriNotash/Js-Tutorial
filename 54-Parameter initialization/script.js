// function interest(principal , rate , years) {
//     rate = rate || 3.5;
//     years = years || 5;

//     return ((principal * rate) / 100) * years;
// }

// console.log(interest(100000 , 3.5 , 5)); // 17500
// console.log(interest(100000)); // 17500


// function interest(principal , rate  = 3.5 , years = 5) {
//     return ((principal * rate) / 100) * years;
// }

// console.log(interest(100000 , 3.5 , 5)); // 17500
// console.log(interest(100000)); // 17500


function interest(principal , rate  = 3.5 , years) {
    return ((principal * rate) / 100) * years;
}

console.log(interest(100000 , 3.5 , 5)); // 17500
console.log(interest(100000)); // NaN
console.log(interest(100000 , 5)); // NaN
console.log(interest(100000 ,undefined , 5)); // 17500


