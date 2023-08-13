const Circle = {
    radius : 1 , 
    draw(){
        console.log("draw");
    }
} 

// for(let key in Circle){
//     console.log(Circle[key]);
// }

// for(let key of Circle){
//     console.log(Circle[key]);
// }

// let circlekeys = Object.keys(Circle);
// console.log(circlekeys);

// for(let key of circlekeys){
//     console.log(key);
// }

// const x = {value : 10};
// const x = new Object();

// let circleEntries =  Object.entries(Circle);

// console.log(circleEntries);

// for(let entry of circleEntries){
//     console.log(entry);
// }

if('draw' in Circle){
    console.log('yes');
    console.log('draw' in Circle);
}else{
    console.log('No');
}