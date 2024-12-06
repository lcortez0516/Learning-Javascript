//Objects - array but with a label (Key value pairs)

const person = {
  //key: value
  firstName: "Lester",
  lastName: "Cortez",
  age: 24,
  goodLooking: false,
  location: ["planet", "earth"],
};

console.log(person);

//Accessing items from our objects
console.log(person.firstName); //first way
console.log(person["firstName"]); //second way

//changing or setting the value
person.lastName = "changed";
console.log(person.lastName);
person.middleName = "Caasi";
console.log(person.middleName);

//delete an element

delete person.middleName;
console.log(person);
