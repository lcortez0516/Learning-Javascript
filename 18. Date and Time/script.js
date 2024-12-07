//Handling Date and Time

const currentDate = new Date();
console.log(currentDate);

//Enter our own data

const myDate = new Date(2024, 2, 24, 12, 30, 0, 0);
console.log(myDate);

//extract the values

const year = currentDate.getFullYear();
const month = currentDate.getMonth();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const day = currentDate.getDay();
console.log(year, month, day, hours, minutes);

//diff format

console.log(currentDate.toDateString());
console.log(currentDate.toISOString());
console.log(currentDate.toLocaleDateString());

//deduct or add a day

console.log(currentDate.getDate() - 1);
