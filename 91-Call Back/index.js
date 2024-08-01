// function print(){
//   setTimeout(()=>{
//     console.log('b');
//   },1000)

// }

// console.log('a');

// print();

// console.log('c');

// ! Senario 1
// function ball1(){
//     setTimeout(()=>{
//         console.log('the ball one reached the end of the hill');
//     },2000);
// }
// function ball2(){
//     setTimeout(()=>{
//         console.log('the ball two reached the end of the hill');
//     },1000);
// }
// function ball3(){
//     setTimeout(()=>{
//         console.log('the ball three reached the end of the hill');
//     },3000);
// }
// ball1();
// ball2();
// ball3();


// ! Senario 2

function ball1(ball2) {
    setTimeout(() => {
        console.log('the ball one reached the end of the hill');
        ball2(ball3);
    }, 2000);
}
function ball2(ball3) {
    setTimeout(() => {
        console.log('the ball two reached the end of the hill');
        ball3();
    }, 1000);
}
function ball3() {
    setTimeout(() => {
        console.log('the ball three reached the end of the hill');
    }, 3000);
}

ball1(ball2);