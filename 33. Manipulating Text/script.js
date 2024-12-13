//Manipulating Text
//innerText
//textContent
//innerHtml

//returns formatted text - all of the text only
const h1 = document.querySelector("h1");
console.log(h1.innerText);
//returns content of the element
console.log(h1.textContent);
//returns all of the content including tags
console.log(h1.innerHTML);

//can change the html
h1.innerText = "Text Changed";
h1.innerHTML = "<del>Text Cdsfsdfs</del>";
