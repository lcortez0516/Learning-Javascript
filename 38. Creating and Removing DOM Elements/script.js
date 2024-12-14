//Creating and Removing Elements
//createELement()
//appendChild()
//append()
//prepend(0
//insertBefore()

//insertAdjacentElement(
//beforebeging
//afterend
//before ennd
//afterend
//element
//)

//removeChild()
//remove()

// //Creating Element
// const h1 = document.createElement("h1");
// h1.textContent = "Hello";
// console.log(h1.textContent);
// h1.classList.add("main-heading");

// //appendChild - adds the element at the end of the list
// const body = document.body;
// body.appendChild(h1);

// //.........................
// const ul = document.querySelector("ul");
// const newLi = document.createElement("li");
// newLi.innerText = "Im a new li tag";
// ul.appendChild(newLi);

// const firstLi = document.querySelector("li");
// //insertBefore(what, where)
// ul.insertBefore(newLi, firstLi);

// //insert Adjacent
// const firstP = document.querySelector("p");
// const i = document.createElement("i");
// i.innerText = "I am italic";
// i.style.color = "red";

// //where, what
// firstP.insertAdjacentElement("beforebegin", i);
// firstP.insertAdjacentElement("afterbegin", i);
// firstP.insertAdjacentElement("beforeend", i);
// firstP.insertAdjacentElement("afterend", i);

//append and prepend
let section = document.querySelector("section");
const firstP = document.querySelector("p");
const i = document.createElement("i");
i.innerText = "I am italic";
i.style.color = "red";
//just like appendChild
section.append(i);
//adds element at the beginning
section.prepend(i);
