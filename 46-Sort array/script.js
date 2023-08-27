// const numbers = [2,3,1];

// numbers.sort();
// console.log(numbers);// [1, 2, 3]

// const reverse = numbers.reverse();
// console.log(reverse);// [3, 2, 1]


const numbers2  = [
    {id : 1 , name : 'html'} ,
    {id : 2 , name : 'css'} ,
];

numbers2.sort(function(a,b){
    let nameA = a.name.toLowerCase();
    let nameB = b.name.toLowerCase();
    if(nameA<nameB) return -1;
    if(nameB>nameA) return 1;
    return 0;
});

console.log(numbers2);