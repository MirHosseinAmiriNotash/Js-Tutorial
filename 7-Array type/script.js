
let users = ["Hossein" , "sam"];
console.log(users);//['Hossein', 'sam']


console.log(users[1]);//sam
console.log(users[0]);//Hossein


users[2] = "ali";
console.log(users);//['Hossein', 'sam', 'ali']

users[1] = "reza";
console.log(users);//['Hossein', 'reza', 'ali']

users[3] = 20;
users[4] = true;
console.log(users);//['Hossein', 'reza', 'ali', 20, true]

console.log(users.length);