//Array Methods
//concat() = joins two or more arrays and returns a result
//includes = checks if an array contains a specified element
//push() adds a new element at the end of the array and returns the new length
//unshift = adds a new element at the beginning of an array and returns the new length
//pop() = removes the last element of an array and returns the removed element
//shift = removes the first element of an array and returns the removed element
//sort() = sorts the elements alphabetically in strings and in ascending order
//slice() = selects the part of an array and returns the new array
//splice() = removes or replaces existing elements and /or adds new elements.

const fruits = [
  "apples",
  "pomegrate",
  "mango",
  "strawberries",
  "pineapple",
  "grapefruit",
];

console.log(fruits);

//push()
fruits.push("bannana");
console.log(fruits);

//pop()
fruits.pop();
console.log(fruits);

//shift
fruits.shift();
console.log(fruits);

//unshift()
fruits.unshift("Hotdogs");
console.log(fruits);

//sort()
fruits.sort();
console.log(fruits);

//concat()
const newFruits = ["lanzones", "jackfruit"];
const joinedArr = fruits.concat(newFruits);
console.log(joinedArr);

const pl = ["javascript", "golang", "pythong", "php"];
const numbers = [3, 5, 2, 4, 1];

//checks if golang is in the array
console.log(pl.includes("golang"));

//join() - joins the elements in the array - can change the default "," with anything
console.log(pl.join(" is EZ "));

//reverse() - reverses the array
console.log(pl.reverse());

//slice - provide the starting and ending index
console.log(pl.slice(0, 1));
