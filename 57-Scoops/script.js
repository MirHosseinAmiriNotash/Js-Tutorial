// const message = "Hossein";

// console.log(message);// Hossein

// {
// const message = "Hossein";
// }
// console.log(message);


// function start(){
//     const message = "Hossein";
//     // if(true){
//     //     const age = 18;
//     // }
//     // console.log(age);// error - script.js:16 Uncaught ReferenceError: age is not defined
//     for(let i = 0 ; i<5 ; i++){
//         console.log(i);
//     }
//     console.log(i);// error - script.js:20 Uncaught ReferenceError: i is not defined
// }
// start();
// console.log(message);// error - script.js:19 Uncaught ReferenceError: message is not defined




// let message = "hi";
// message = "hfdpofkw";
// console.log(message);// hfdpofkw


// const message = "hi";
// message = "hfdpofkw";
//Uncaught TypeError: Assignment to constant variable. at script.js:35:9


// const message = "hi";
// const message = "hfdpofkw";
//Uncaught SyntaxError: Identifier 'message' has already been declared (at script.js:35:7)



const color = "red";

function start(){
    const message = "Hossein";
    // console.log(color);// red
    const color = "blue";
    // console.log(color);// blue
}
//  console.log(color);// red

function stop(){
    const message = "Hossein";
    let age = 20;
    if(true){
        // let age = 18;
        age = 18;
         console.log(age);// 20 - 18 - 18
    }
     console.log(age);// 20 - 18
    
}

// start();
stop();

