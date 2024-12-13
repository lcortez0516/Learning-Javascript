//Working with Attributes
//href
//value
//type
//getAttribute
//setAttribute

//gets the href
const a = document.querySelector("a");
console.log(a.href);
//change the href
a.href = "Youtube";
console.log(a.href);

//value
const input = document.querySelector("input");
input.value = "Hello World";
console.log(input.value);

//type
console.log(input.type);
input.type = "password";
//change the type
console.log(input.type);

//getAtrr
console.log(input.getAttribute("type"));
console.log(input.getAttribute("placeholder"));
//setAttr
console.log(input.setAttribute("type", "email"));
