//Methods - Functions inside an object

//1st way
// greet = () => `Hello, my name is ${person.name} & I am ${person.age} years old`;

// const person = {
//   name: "lester",
//   age: 30,
//   greet,
// };
// console.log(person.greet());

//2nd way - best way
const person = {
  name: "Lester",
  age: 19,
  greet: () =>
    `Hello, my name is ${person.name} & I am ${person.age} years old`,
};

console.log(person.greet());
