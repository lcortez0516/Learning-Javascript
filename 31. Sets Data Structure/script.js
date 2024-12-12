//Sets Data Structure - built in data structure in ES6. Collection of unique elements.
// Duplicate Values are automatically removed

const initVal = [1, 2, 3, 2, 2, 2, 4, 4, 4, 4];
const mySet = new Set(initVal);

//automatically removes duplicates
console.log(mySet);

//add new elements
mySet.add(7);
mySet.add(10);
mySet.add(2);
mySet.add(3);
console.log(mySet);

//delete an element
mySet.delete(2);
console.log(mySet);

//Empties the set
// mySet.clear();
// console.log(mySet);

//iterate over set
for (let val of mySet) {
  console.log(val);
}
