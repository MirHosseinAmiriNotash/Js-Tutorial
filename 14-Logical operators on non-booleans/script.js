
console.log(false||true);//true
console.log(false||"Hossein");//"Hossein"
console.log(false||1);//1

//false ,  undifinde , null , 0 , "" or '' , NAN(not a number)
//true , 1 , -2  (Any non-zero number)

console.log(false||0/*false*/||true);//true
console.log(false||0/*false*/||false);//false
console.log(false||1/*true*/||false);//1
console.log(false||"Hossein"/*true*/||false);//Hossein

console.log(false && 1/*true*/);//Hossein
console.log("" /*false*/ && 1/*true*/);//""
console.log(0 /*false*/ && 1/*true*/);//0
console.log(true && 0/*false*/ && "Hossein"/*true*/);//0


