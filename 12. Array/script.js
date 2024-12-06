//Arrays - store multiple values in a single variable

const myList = [1, 2, 3, 4, 5];
console.log(myList);

const stringArr = ["eat", "sleep", "code", "repeat"];
console.log(stringArr);

//Access the values
console.log(stringArr[0]);
console.log(stringArr[1]);
console.log(stringArr[2]);
console.log(stringArr[3]);

//Nested Array / 2 dimensional array
const nestedArr = ["one", [1, 2, 3], "two", ["one", 2, true]];

console.log(nestedArr);
//accessing inside the nested array
console.log(nestedArr[1][1]);
