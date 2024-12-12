//Map Data Structure - built in structure introduced in ES6.
//Allows to store key-value pairs where both keys andd values can be of any data type
//Just like object but a few key differences.
//Keys can be of any data type
//Maintains insertion order: Map preserces the order of key-value pairs as they were inserted
//Iteration: Map provides built-in methods for easy iteration over its elements

const map = new Map();
const keyOne = "string";
const keyTwo = {};
const keyThree = function () {};

//sets value to the map
map.set(keyOne, "Value of key one");
map.set(keyTwo, "Value of key two");
map.set(keyThree, "Value of key three");
//map.get("key") - gets one value from the map
console.log(map);

//gives the number of map keys
console.log(map.keys());
//gives the number of map values
console.log(map.values());
//delete a key and value
console.log(map.delete(keyTwo));
console.log(map);
//returns the size
console.log(map.size);

//Iterate over the map - key and value
for (let [key, value] of map) {
  console.log(`${key} == ${value}`);
}

//Iterate over the map - getting the keys
for (let key of map.keys()) {
  console.log(key);
}

//Iterate over the map - getting the values
for (let value of map.values()) {
  console.log(value);
}
