//Destructuring - allows us to "unpack"/"extract" values from data-structure (Arrays, objects)
//into separate distinct variables

//Destructuring array
// const foo = ["one", "two", "three"];

// //extracts the value 'one', two, three from the foo array
// const [one, two, three] = foo;
// console.log(one);
// console.log(two);
// console.log(three);

// //the name doesnt matter btw
// const [red, blue, green, yellow] = foo;
// console.log(red);
// console.log(blue);
// console.log(green);
// //yellow is undefined because there are only 3 values
// console.log(yellow);

// //can also provide default values
// let a, b;
// [a = 5, b = 8] = [1];
// console.log(a);
// console.log(b);

// //can also extract from a function-returned value
// f = () => [1, 2, 3, 4, 5];

// let x, y;
// [r, t] = f();
// console.log(r, t);

// //can also ignore a value
// [i, , k, l, m] = f();
// console.log(i, k, l, m);

// //Assigning te rest of an array to a variable
// //store the first value to q and then the rest to r
// const [q, ...s] = [1, 2, 3, 4, 5];
// console.log(q, s);

//OBJECT destructuring - order doesnt matter but the name does
// const student = {
//   name: "lester",
//   position: "mayor",
//   rollNo: 27,
// };

//variable name should be the same as the property name
// const { name } = student;
// const { position } = student;
// const { rollNo } = student;
// console.log(name);
// console.log(position);
// console.log(rollNo);

//Renaming our variables
const num = {
  x: 100,
  y: 200,
};

const { x: new1, y: new2 } = num;
console.log(new1);
console.log(new2);

//Function Destructuring
const person = {
  name: "Lester",
  age: 20,
  country: "USA",
};

//extract the values of the object parameter inside the function ()
print = (name, age, country) => {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Country: ${country}`);
};

print(person);
