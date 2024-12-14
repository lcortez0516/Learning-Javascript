//Events

const badWay2 = document.querySelector(".second-btn");
const bestWay = document.querySelector(".best");
const p = document.querySelector("p");

//second bad way
badWay2.onclick = function () {
  alert("Hello");
};

//bestWay
// bestWay.addEventListener("click", () => alert("Best Way"));
//there are lots of events besides click btw

//event object - 'e' - gives information about the event (very useful)
bestWay.addEventListener("click", (e) => console.log(e));
