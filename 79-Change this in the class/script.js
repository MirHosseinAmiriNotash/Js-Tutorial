'use strict'
const Circle  = function(){
    this.draw = function(){
        console.log(this);
    }
}

const c = new Circle();
//method call
// c.draw();
const draw = c.draw.bind(c);
// console.log(draw);
//function call
draw();


class circle{
draw(){
    console.log(this);
  }
}

const c2 = new circle();
const draw2 = c2.draw.bind(c2);
draw2();