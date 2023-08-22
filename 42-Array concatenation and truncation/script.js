// const first = [1,2,3];
// const second = [4,5,6];

// const combined = first.concat(second);

// console.log(combined);// [1, 2, 3, 4, 5, 6]

// const slice = combined.slice(2,4);
// const slice2 = combined.slice(2);
// const slice3 = combined.slice();
// console.log(slice);// [3,4]
// console.log(slice2);// [3, 4, 5, 6]
// console.log(slice3);// [1, 2, 3, 4, 5, 6]


const first = [{id : 1}];
const second = [4,5,6];

const combined = first.concat(second);
first[0].id = 10;
console.log(combined);// [1, 2, 3, 4, 5, 6]
console.log(first);