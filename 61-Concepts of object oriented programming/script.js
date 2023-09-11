let baseSalary = 30000;
let overtime = 10;
let rate = 20;


function getwage (baseSalary , overtime , rate){
    return baseSalary + (overtime * rate);
}

getwage(baseSalary,overtime,rate);


//  Object Oriented Programming 

let employee = {
    baseSalary : 30000,
    overtime : 10,
    rate : 20,
    getwage(){
        return this.baseSalary + (this.overtime * this.rate);
    }
}  