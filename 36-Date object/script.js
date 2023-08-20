
const now = new Date();
const date1 = new Date('September 18 2023 1:10');
const date2 = new Date(2018 , 7 , 25 , 12);

console.log(now.toDateString());// Sun Aug 20 2023 - It converts the date into string format and shows it to us
console.log(date1.toDateString());// Mon Sep 18 2023
console.log(date2.toDateString());// Sun Aug 20 2023

console.log(now.toISOString());// 2023-08-20T08:53:08.317Z
console.log(date1.toISOString());// 2023-09-17T21:40:00.000Z
console.log(date2.toISOString());// 2023-08-20T08:30:00.000Z

console.log(now.getDate());// 20
console.log(date1.getDate());// 18
console.log(date2.getDate());// 25

console.log(now.getDay());// 0 - Returns the day of the week
console.log(date1.getDay());// 1
console.log(date2.getDay());// 5

console.log(now.getFullYear());// 2023
console.log(date1.getFullYear());// 2023
console.log(date2.getFullYear());// 2018

console.log(now.getMonth());//7
console.log(date1.getMonth());//8
console.log(date2.getMonth());//7


now.setFullYear(2013);
console.log(now.toDateString());// Tue Aug 20 2013






