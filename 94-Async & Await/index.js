async function ball1(){
    
            if(true){
                return ('the ball one reached the end of the hill');
            }else{
                throw new Error('the ball one failed');
            }
}

function ball2(){
    if(false){
        return ('the ball two reached the end of the hill');
    }else{
        throw new Error('the ball two failed');
    }
}

function ball3(){
    if(true){
        return ('the ball three reached the end of the hill');
    }else{
        throw new Error('the ball three failed');
    }
}

//console.log(ball1());

// ball1().then((msg)=> {
//     console.log(msg);
    
//     return ball2();
// }).then((msg)=>{
//     console.log(msg);
    
//     return ball3();
// }).then((msg)=> {
//     console.log(msg);
    
// }).catch((error)=>{
//      console.log(error);
     
// });


// await ball1();

async function execute(){
    try{
    console.log(await ball1());
    console.log(await ball2());
    console.log(await ball3());
}catch(e){
    console.log(e);
    
}
    
}

execute();