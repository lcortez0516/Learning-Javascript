//For In Loop - used to iterate over the enumerable properties of an object.
//It is a way to loop through the keys (property name) of an object

//for (let key in object) {...}
let person = {
  name: "Lester",
  age: 19,
  gender: "Male",
};

for (let key in person) {
  console.log(key, person[key]);
}

//Can be used in arrays
let list = ["one", "two", "three", "four"];

for (let index in list) {
  console.log(`${index} : ${list[index]}`);
}

//another example
const obj = {
  a: 1,
  b: 2,
  c: 3,
};

for (let key in obj) {
  console.log(`${key} : ${obj[key]}`);
}
