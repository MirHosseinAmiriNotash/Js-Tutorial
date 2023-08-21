
const courses = [
    {id : 1 , name : 'a'} , 
    {id : 2 , name : 'b'}
]

const result = courses.find((course)=>{// or const result = courses.find(course=>{}
    return course.name === "a"
})

console.log(result);//{id : 1 , name : 'a'}




//The cleanest mode

const courses2= [
    {id : 1 , name : 'a'} , 
    {id : 2 , name : 'b'}
]

const result2 = courses.find(course=> course.name === "a")

console.log(result2);//{id : 1 , name : 'a'}
