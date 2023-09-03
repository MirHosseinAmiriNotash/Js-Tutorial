// Hoisting


// Function Declaration
walk();
function walk(){
    console.log('walk');
}


// Function Expression
// run();
let run = function(){
    console.log('run');
};

let move = run;

run();
move();

console.log(x);
let x = 1;