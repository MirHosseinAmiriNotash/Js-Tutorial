function Shape(){

}

Shape.prototype.duplicate = function(){
    console.log('duplicate');
}




function Circle(radius){
    this.radius = radius;
}


Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.draw = function(){
    console.log('draw');
}

// Circle.prototype.duplicate = function(){
//     console.log('duplicate');
// }


function Square(){

}

Square.prototype.duplicate = function(){
    console.log('duplicate');
}


const s  = new Shape();
const c = new Circle();