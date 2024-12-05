//Logical Operators
// Logical &&
// (and), both the operands are true
// || (or),  at least one of them is true
// ! (not) negates//reverses

//AND &&
const a = true;
const b = false;
const c = 4;
console.log(a && b); //false
console.log(c > 2 && c < 2); //false

//OR ||

console.log(a || b); //true
console.log(c > 2 && c < 2); //true

//NOT !
console.log(!a); //false
console.log(!b); //true
console.log(!(c > 2 && c < 2)); //true
