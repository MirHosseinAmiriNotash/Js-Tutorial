// 6am - 12pm -> good morning
// 12pm - 6pm -> good afternoon
// otherwise -> good evening

let hour = 20;

if(hour>=6 && hour<12){
    console.log("good morning");
}else if(hour>=12 && hour<18){
    console.log("good afternoon");
} else{
    console.log("good evening");
}