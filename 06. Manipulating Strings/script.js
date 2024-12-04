//Manipulating Strings
let firstName = "Lester";
let secondName = "Cortez";
console.log(firstName);
console.log(secondName);

//string concatenation
let fullName = firstName + " " + secondName;
console.log(fullName);

//concat method
let name = firstName.concat(secondName);
console.log(name);

//length
console.log(name.length);

//Cases
console.log(name.toLowerCase());
console.log(name.toUpperCase());

//Slice
let newString = "Icecreamyummy";
console.log(newString.slice(0, 8));

//split & join
//splits then join it back
console.log(newString.split("").join("-"));

//Includes - checks if there is a specific value included in the string
console.log(newString.includes("X"));

//Trim - removes spaces
let x = "     fsdfdfsd     ";
console.log(x.trim());

//back ticks
let desc = `random




text`;

console.log(desc);
