// let myarray = [];
// console.log(myarray);

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const circle = new Circle(10);
console.log(circle);

const circle2 = new Circle(20);
console.log(circle2);

let array1 = [1];
console.log(array1);

let array2 = [2];
console.log(array2);