// const person = {fname : 'Hossein' , lname : 'Amiri'};

// console.log(`${person.fname} ${person.lname}`);// Hossein Amiri

// const person = {
//     fname : 'Hossein' , 
//     lname : 'Amiri' ,
//     fullName() {                                               
//         return `${person.fname} ${person.lname}`;
//     }//or fullName : function(){return `${person.fname} ${person.lname}`}
// };

// console.log(person.fullName());// Hossein Amiri

// person.fullName = 'reza shahbazi'


// getters => access properties
// setters => change (mutate)

const person = {
    fname : 'Hossein' , 
    lname : 'Amiri' ,
    get fullName() {                                               
        return `${person.fname} ${person.lname}`;
    } , //or fullName : function(){return `${person.fname} ${person.lname}`}

    set fullName(value){
      const parts = value.split(' ');
      this.fname = parts[0];
      this.lname = parts[1]
    }
};


console.log(person.fullName);// Hossein Amiri

person.fullName = 'reza shahbazi'
console.log(person.fullName);// reza shahbazi
console.log(person);