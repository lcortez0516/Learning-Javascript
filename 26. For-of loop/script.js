//For of Loop - Modern iteration statement introduced in ES6 that provides a concise and easy
//way to loop over elements in iterable objects like arrays,
//strings, maps, sets and more. Allows you to iterate directly over the values of the elements
//rather than dealing with the indices or kess, which makes the code more readable and less
//error prone.

//for(variable of iterable) {....}

let people = ["lester", "kaye", "king", "louie"];

for (let person of people) {
  console.log(person);
}

//another example
const text = "Hello";
for (const char of text) {
  console.log(char);
}
