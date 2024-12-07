const person = {
  name: "Lester Cortez",
  age: 20,
  email: "lc@gmail.com",
  isSubscribed: true,
  hobbies: ["Reading", "Running", "Cooking"],
  address: {
    city: "New York",
    goodlooking: true,
  },
};

//JSON.stringify() - convert javascript object to json string
const jsonString = JSON.stringify(person);
console.log(jsonString);

//JSON.parse - convert json strings to javascript objects
const parsedObject = JSON.parse(jsonString);
console.log(parsedObject);
