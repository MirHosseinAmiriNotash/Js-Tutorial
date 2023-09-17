let person = {name : 'Hossein'};
// console.log(person);


// new Object();

// for(let key in person){
//     console.log(key);
// }

// console.log(Object.keys(person));

// let objectBase = Object.getPrototypeOf(person);
// let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
// console.log(descriptor);

    Object.defineProperty(person,'name',{
        writable : false,
        enumerable : false
    });
    console.log(Object.keys(person));
    person.name = 'ali';
    console.log(person);