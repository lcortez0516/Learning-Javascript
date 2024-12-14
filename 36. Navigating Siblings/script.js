//Navigating Siblings
let firstLi = document.querySelector("li");
console.log(firstLi);

// //get the parent of the element
// console.log(firstLi.parentElement);

// //gets the parent element of the parent element of the element and so onn.
// console.log(firstLi.parentElement.parentElement);

// //gets the children
// let ul = document.querySelector("ul");
// console.log(ul.children);
// console.log(ul.children[0]);
// console.log(ul.children[1]);
// console.log(ul.children[2]);

// console.log(ul.children[0].innerText);

//gets the next sibling
console.log(firstLi.nextElementSibling);
//gets the previous sibling - returns null
// //because its the first element and nothing comes before it
console.log(firstLi.previousElementSibling);
