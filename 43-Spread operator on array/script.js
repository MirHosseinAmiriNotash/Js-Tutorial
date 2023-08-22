const first = [1,2,3];
const second = [4,5,6];

// const combined = first.concat(second);
// const combined = [...first,...second]
const combined = ['a',...first,'c',...second,'b']

console.log(combined);// ['a', 1, 2, 3, 'c', 4, 5, 6, 'b']

// const slice = combined.slice();پ

const slice = [...combined];

console.log(slice);// ['a', 1, 2, 3, 'c', 4, 5, 6, 'b'] 
