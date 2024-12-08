//Enhanced Object Literals - make defining object easier (Like a setter)
//makes the code shorter

function user(name, age, work) {
  return {
    name: name, // can remove the "name: "
    age: age,
    work: work,
    intro: () => {
      console.log(`${name}`);
    },
  };
}

const lester = user("Lester", 24, "Programmer");
const kaye = user("Kaye", 26, "UX Designer");
console.log(kaye);
console.log(lester);

console.log(lester.intro());
console.log(kaye.intro());

//sample
// let lib = {
//   sum: (a, b) => a + b,
//   mult: (a, b) => a * b,
// };

// console.log(lib.sum(10, 20));
// console.log(lib.mult(10, 20));

//another sample

// getPersonES6 = (name, age, height) => {
//   return {
//     name,
//     age,
//     height,
//   };
// };

// console.log(getPersonES6("Lester", 24, 200));
