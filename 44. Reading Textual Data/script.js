// Read textual Data from external files (.txt) by using a fetch api
//Fetch api promise only rejects when we have network error (not in other cases).

//returns a promise
console.log(fetch("text.txt"));

//read data

//text() method returns promise
// If resolved, returns text representaton of the body

fetch("text.txt")
  .then((res) => {
    //catch is not the best way to treat errors, do this instead
    if (!res.ok) throw Error(res.statusText);
    return res.text();
  })
  .then((data) => console.log(data));

//using async await - then render to html

const results = document.querySelector(".results");

async function renderData() {
  try {
    const response = await fetch("text.txt");
    //handle the error
    if (!response.ok) throw Error(response.statusText);
    const data = await response.text();

    results.textContent = data;
  } catch (error) {
    console.log(error);
  }
}

renderData();
