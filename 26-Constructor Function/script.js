//Factory function

function createCircle(radius){
    return{
     radius , //or radius: radius 
     draw(){console.log("draw")} ,//or draw : function(){console.log("draw")}
    } 
 }

//Constructor Function

//camel notation(Factory Function)
//Pascal notation(Constructor Function)

function Circle(radius){
    this.radius = radius
    this.draw = function(){
        console.log("draw")
    }
}

const circle = new Circle(3);
console.log(circle);