//Managing Classes

//classlist
//add()
//remove()
//toggle()

//check the classes
const h1 = document.querySelector("h1");
console.log(h1.classList);

//add class
h1.classList.add("Five");
console.log(h1.classList);

//remove class
h1.classList.remove("one");
console.log(h1.classList);

//toggle() - adds or removes the class whether the element have it or not
//works well with buttons
h1.classList.toggle("one");
console.log(h1.classList);
