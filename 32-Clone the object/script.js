const Circle = {
    radius : 1 , 
    draw(){
        console.log("draw");
    }
} 

// const another = {}

// for(let key in Circle){
//     another[key] = Circle[key]; // another['radius] = 1
// }



// const another  = Object.assign({} , Circle);
// const another  = Object.assign({color : 'red'} , Circle);

// const another  = {...Circle};
// const another  = {Color : 'red' , ...Circle};
const another  = {location : 1 , ...Circle , Color : 'red'};

console.log(another);