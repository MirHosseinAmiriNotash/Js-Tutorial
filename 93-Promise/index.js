function ball1(){
    return new Promise((resolve,reject)=>{
            if(true){
                resolve('the ball one reached the end of the hill');
            }else{
                reject('the ball one failed');
            }
    })
}

function ball2(){
    return new Promise((resolve,reject)=>{
            if(false){
                resolve('the ball two reached the end of the hill');
            }else{
                reject('the ball two failed');
            }
    })
}

function ball3(){
    return new Promise((resolve,reject)=>{
            if(true){
                resolve('the ball three reached the end of the hill');
            }else{
                reject('the ball three failed');
            }
    })
}

//console.log(ball1());

ball1().then((msg)=> {
    console.log(msg);
    
    return ball2();
}).then((msg)=>{
    console.log(msg);
    
    return ball3();
}).then((msg)=> {
    console.log(msg);
    
}).catch((error)=>{
     console.log(error);
     
});