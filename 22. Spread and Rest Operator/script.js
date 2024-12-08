//Spread = I takes an iterable (e.g. array) and expands it into individual elements

//spread operator in functions

// giveMe = (a, b, c, d) => {
//   console.log("a", a);
//   console.log("b", b);
//   console.log("c", c);
//   console.log("d", d);
// };

// const colors = ["red", "green", "blue", "teal"];
// giveMe(colors);
// //only the first index holds the whole array

// giveMe(...colors); //spreads the array, therefore all the parameters are filled

// //Spread operators in array
// const strNums = ["one", "two", "three"];
// const moreStrNums = ["four", "five", "six"];

// const concat = [...strNums, ...moreStrNums];
// console.log(concat);

// //Spread Operators in objects
// const obj1 = {
//   x: 1,
//   y: 2,
// };

// const obj2 = {
//   z: 3,
// };

// const obj3 = {
//   ...obj1,
//   ...obj2,
// };

// console.log(obj3);

//REST Operator - same syntax as Spread
// allows a function to accept an indefinite number of arguments as an array,
//providing a way to represent variadic functions(functions that accept unlimited parameters)
// in Javascript

//only one parameter is provided but rest operator is used so it can accept unlimited
//amount of parameter
user = (...userData) => {
  console.log(userData);
};

user("Lester", 19, "Programming", "football");

//first parameter will go to x and the rest, will fill the variable
user2 = (x, ...userData) => {
  console.log(x);
  console.log(userData);
};

user2("sdfsd", 12, 23, 25, 26, 78, 79);

print = (...values) => {
  console.log(...values);
};

print(1, 2, 3, 4, 5, 6, 7, 6, 7, 8, 8, 9);
