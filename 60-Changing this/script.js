// const video = {
//     title : 'a' ,
//     tags : ['a' , 'b' , 'c'] , 
//     showtags(){
//         const self = this;
//        this.tags.forEach(function(tag){
//          console.log(self.title,tag);
//        })
//     }
// }

// // video.showtags();


// function playvideo(){
//     console.log(this);
// }

// playvideo.call({name : 'Hossein'}); // {name: 'Hossein'}

// playvideo.apply({name : 'Hoseein'});// {name: 'Hossein'}

// const fn = playvideo.bind({name : 'Hossein'});
// fn();// {name: 'Hossein'}



const video = {
    title : 'a' ,
    tags : ['a' , 'b' , 'c'] , 
    showtags(){
       this.tags.forEach((tag)=>{
         console.log(this.title,tag);
       })
    }
}

video.showtags();
