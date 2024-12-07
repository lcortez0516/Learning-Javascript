//Functions - block of code that performs a specific task
//makes the code reusable
//makes program easier as each small task is divided into a function

// function name(parameter){...}

//function declaration
// function greet() {
//   console.log("Hello ");
// }

// //call the function
// greet();
// greet();
// greet();
// greet();

//accepts a parameter
// function sayHello(userName) {
//   console.log(` Hello ${userName}`);
// }
// sayHello("Lester");
// sayHello("Carla");
// sayHello("Kaye");

// //return a value
// function add(x, y) {
//   return x + y;
// }

// const ans = add(10, 20);
// console.log(ans);
// const ans2 = add(100, 200);
// console.log(ans2);
// const ans3 = add(10000, 20000);
// console.log(ans3);

//Function expression - function that is stored inside a variable
// const greetings = function (user) {
//   console.log("this is a function expression" + " " + user);
// };

// greetings("Lester");

//Callbackfunction - When we provice a function as an argument to other function.
//that function is known as a callback function

// function showCallfunc(fn) {
//   const value = 10;
//   fn(value);
// }

// showCallfunc(function (value) {
//   console.log(value);
// });

// //another example
// function greet(name, cb) {
//   console.log(`Hello ${name}`);
//   cb();
// }

// function cb() {
//   console.log(`I am callback function`);
// }

// greet("Lester", cb);

// function showCallfunc(fn) {
//   const value = 10;
//   fn(value);
// }

// function fn(value) {
//   console.log(value);
// }

// showCallfunc(fn);

//Arrow Functions - New way of writing function. Makes the code shorter and easier to read
showCallfunc = (fn) => {
  const value = 10;
  fn(value);
};

fn = (value) => console.log(value);
showCallfunc(fn);
