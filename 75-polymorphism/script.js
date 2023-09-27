function extend(Child,Parent){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child
}

function Shape(){

}

Shape.prototype.duplicate = function(){
    console.log('duplicate');
};

function Circle(){

}

extend(Circle,Shape);
Circle.prototype.duplicate = function(){
    //  Shape.prototype.duplicate.call(this);
    // Shape.prototype.duplicate();
    console.log('duplicate circle');
}

function Square(){

}
extend(Square,Shape);
Square.prototype.duplicate = function(){
    console.log('duplicate square');
}

const shapes = [
    new Circle(),
    new Square()
];

for(let shape of shapes){
    shape.duplicate();  
//     if(shape.type == "circle"){
//         duplicateCircle();
//     }
//     else if(shape.type == "square"){
//         duplicateSquare();
//     }
 }

// const c = new Circle();

