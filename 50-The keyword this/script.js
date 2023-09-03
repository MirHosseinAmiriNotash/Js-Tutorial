
// method -> obj
// function -> global(window,global)

// global Object in browser ---> window
// global Object in node ---> global


// const video = {
//     title : 'a' ,
//     play(){
//        console.log(this);
//     }, 

//     stop(){
//         console.log(this);
//      } , 
// }

// function playVideo(){
//    console.log(this);
// }

// video.play();
// video.stop();

// playVideo();

// function Video(title){
//    this.title = title;
//    console.log(this);
// }
// const v = new Video('abc');


const video = {
    title : 'a' ,
    tags : ['a' , 'b' , 'c'] , 
    showtags(){
       this.tags.forEach(function(tag){
         console.log(this,tag);
       } , {name:'ali'})
    }
}

video.showtags();
