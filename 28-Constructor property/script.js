//Factory function

function createCircle(radius){
    return{
     radius , //or radius: radius 
     draw(){console.log("draw")} ,//or draw : function(){console.log("draw")}
    } 
 }
 
 let circle = createCircle(1);

 //Constructor Function
 
function Circle(radius){
    this.radius = radius
    this.draw = function(){
        console.log("draw")
    }
}

const another = new Circle(3);

let x = {}
//let x = new Object();

//new String("Hossein");
let name = "Hossein"; 

//new Boolean();
let y = true;

//new Number();
let z = 12;
