//Map Filter Find

//Map - Just like foreach, executes a callback function but creates a new array populated with
//the results of calling the provided function

let numbers = [1, 2, 3, 4, 5];

//multiplies all of the elements of the array, and store it in a new array
//map will not modify the array, it creates a new one
let double = numbers.map((num) => num * 2);
console.log(double);

let arr = [1, 2, 3, 4];

//Filter method - built-in arrayy method. Creates a new array containing elements that
//pass a certain condition

const songs = [
  { name: "lucky you", duration: 4.34 },
  { name: "Just like you", duration: 3.23 },
  { name: "The Search", duration: 2.33 },
  { name: "Old Town Road", duration: 1.43 },
  { name: "The Box", duration: 5.23 },
];

//returns values that has a duration of greater than 3
console.log(songs.filter((songs) => songs.duration > 3));

//another example
const computers = [
  { ram: 4, hdd: 100 },
  { ram: 8, hdd: 200 },
  { ram: 16, hdd: 300 },
  { ram: 32, hdd: 400 },
];

console.log(computers.filter((com) => com.ram > 16));

//another one
const ages = [32, 33, 16, 40];
console.log(ages.filter((age) => age > 18));

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

console.log(words.filter((word) => word.length > 6));

//Find Method - Find only the first element in the array that matches a condition, otherwise, returns undefined
const people = [
  { name: "lester", age: 17 },
  { name: "kaye", age: 18 },
  { name: "blacky", age: 20 },
  { name: "whitey", age: 30 },
  { name: "kobid", age: 30 },
];

console.log(people.find((person) => person.name === "lester"));
console.log(people.find((person) => person.age === 30));
console.log(people.find((person) => person.name === "kaye"));

//Filter Method - returns all the values that matches the condition
console.log(people.filter((person) => person.age === 30));

//Every and Some method - also checks the elements of an array based on a condition

//Every Method - tests whether all elements meet the condition and returns true
//Some method on the other hand, will return true if atleast one element meets the condition

//Every
const humans = ["lester", "kaye", "whitey"];

//false
let res1 = humans.every((human) => human.length === 4);
console.log(res1);

//true
let humans2 = ["lest", "kaye", "whit"];
let res2 = humans2.every((human) => human.length === 4);
console.log(res2);

//Some

//true
res1 = humans.some((human) => human.length === 4);
console.log(res1);

//true
res2 = humans2.some((human) => human.length === 4);
console.log(res2);
