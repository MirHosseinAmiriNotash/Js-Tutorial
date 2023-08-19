
//string primitive
// const message = "Hossein";


//string object
// const another = new String("neon");

const message = "Hossein . coding is cool";
console.log(message);

console.log(message.length);//The length of the string (including blank spaces)

console.log(message[0]);//H
console.log(message[1]);//o
console.log(message[2]);//s
console.log(message[3]);//s
console.log(message[4]);//e
console.log(message[5]);//i
console.log(message[6]);//n


console.log(message.includes('w'));//false - includes checks whether the input string is present in our string or not
console.log(message.includes('hossein'));//false
console.log(message.includes('Hossein'));//true


console.log(message.startsWith('Hossein'));//true
console.log(message.startsWith('coding'));//false

console.log(message.endsWith('cool'));//true
console.log(message.endsWith('coding'));//false


console.log(message.indexOf('Hossein'));//0
console.log(message.indexOf('H'));//0
console.log(message.indexOf('coding'));//10
console.log(message.indexOf('c'));//10 - The first c it finds returns the index
console.log(message.indexOf('w'));//-1 - If there is no word in our string, it returns -1


console.log(message.replace("coding" , "programing"));//Hossein . programing is cool
console.log(message);//Hossein . coding is cool - It has no effect on the main string

console.log(message.toUpperCase());//HOSSEIN . CODING IS COOL
console.log(message);//Hossein . coding is cool - It has no effect on the main string


console.log(message.toLowerCase());//hossein . coding is cool
console.log(message);//Hossein . coding is cool - It has no effect on the main string



let message2 = "   Hossein . coding is cool    ";
console.log(message2);//   Hossein . coding is cool    
console.log(message2.trim());//Hossein . coding is cool - Removes the spaces at the beginning and end of the string
console.log(message2);//   Hossein . coding is cool     - It has no effect on the main string
console.log(message2.trimStart());//or trimLeft() - "Hossein . coding is cool    "
console.log(message2.trimEnd());//or trimRight() - "   Hossein . coding is cool"


let message3 = 'Hossein . \ncoding is cool';
console.log(message3);

let message4 = 'Hossein . coding is cool';
console.log(message4.split(" "));//['Hossein', '.', 'coding', 'is', 'cool']
let message5 = 'Hossein-coding-is-cool';
console.log(message5.split("-"));//['Hossein', 'coding', 'is', 'cool']
console.log(message5.split(" "));//['Hossein-coding-is-cool']











