function Circle(radius){
    // Instance members
    this.radius = radius;
    this.move = function(){
        console.log('move'); 
    }
}

// prototype members
Circle.prototype.draw = function(){
    console.log('draw');
}

const c1 = new Circle(1);


// returns instance members
// console.log(Object.keys(c1));


// returns all members (instance and prototype)
for(let key in c1){
    console.log(key);
}
