//Reading External APIs

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => {
    if (!res.ok) new Error(res.statusText);
    return res.json();
  })
  .then((res) => {
    const postsContainer = document.querySelector(".all-posts .container");
    res.forEach((element) => {
      postsContainer.innerHTML += `
        <div class="card"> 
        <p>${element.id} </p>
        <h1> ${element.title}</h1>
        <p> (ID): ${element.body}</p>
        </div>
        `;
    });
  });
