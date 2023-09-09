const person = {
    fname : 'Hossein' , 
    lname : 'Amiri' ,
    get fullName() {                                               
        return `${person.fname} ${person.lname}`;
    } ,

    set fullName(value){
      const parts = value.split(' ');
      if(typeof value !== 'string'){
        // return;
        throw new Error('value is not a String!');
      }
      if(parts.length !== 2){
        throw new Error('Enter a first an last name');
      }
      // const e = new Error();
      // throw e;
     
      this.fname = parts[0];
      this.lname = parts[1]
    }
};

try{
  //...

  // person.fullName = true;
  person.fullName = 'hosseinamiri';

  //...
  
}catch(e){
  // console.log(e);
  alert(e);
}


console.log(person);