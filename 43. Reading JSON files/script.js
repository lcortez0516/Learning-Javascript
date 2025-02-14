//Reading JSON files

const result = document.querySelector(".results");

async function renderData() {
  try {
    const response = await fetch("data.json");
    if (!response.ok) throw Error(response.statusText);
    const data = await response.json();
    console.log(data);

    renderText = `<h1> My name is  ${data.name} and I am ${data.age} years old</h1>`;
    result.innerHTML = renderText;
  } catch (error) {
    console.log(error);
  }
}

renderData();
