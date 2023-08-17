
console.log(Math.PI);//3.141592653589793
console.log(Math.random());//Returns any number between zero and one

function getRandomArbitrary(min , max){
    return Math.random() * (max-min) + min
}

console.log(getRandomArbitrary(10 , 50));//Returns any number between 10 and 50


function getRandom(min , max){
    return Math.floor(Math.random() * (max-min) + min);
}


console.log(getRandom(10 , 50));//Returns any number between 10 and 50 without a decimal point


console.log(Math.round(4.9))//5
console.log(Math.round(4.2))//4

console.log(Math.max(10,25,46,87))//87
console.log(Math.min(10,25,46,87))//10


console.log(Math.abs(-5))//5 - Absolute value
console.log(Math.abs(5))//5




