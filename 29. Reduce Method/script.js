//Reduce Method - applies the reducer function to each elementn of an array,
//accumulating the results into a single value.
//Often used for calculations to simplify the array into a single value

//Also makes a copy of the array
const numbers = [1, 2, 3, 4, 5, 6];

//takes 2 parameters, the previous and the current value. Takes 0 as  the default first value
const sum = numbers.reduce((p, c) => {
  console.log(`Previous: ${p}`);
  console.log(`Previous: ${c}`);
  return p + c;

  //utilizes the previous value and current value
}, 0);

//another example - with ternary operator
const people = [
  { name: "Lester", age: 19 },
  { name: "Alex", age: 20 },
  { name: "kaye", age: 23 },
  { name: "whitey", age: 26 },
];

//Finds the oldest person in the array
const oldestAge = people.reduce((p, c) => (c.age > p ? c.age : p), 0);
console.log(oldestAge);
