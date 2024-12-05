//Switch Statements - An alternative to if else if the values are convenient

// switch(){
// case x:

// case y:

// default:
// }

let x = 1;
let text;

switch (x) {
  case 0:
    text = "off";
    break;
  case 1:
    text = "on";
    break;
  default:
    text = "no value";
}

console.log(text);

//another example

let day = "tuedsfsdfsday";

switch (day) {
  case "monday":
    console.log("Today is Monday");
    break;
  case "tuesday":
    console.log("Today is tuesday");
    break;
  case "wednesday":
    console.log("Today is wednesday");
    break;
  case "thursday":
    console.log("Today is thursday");
    break;
  case "friday":
    console.log("Today is friday");
    break;
  case "saturday":
    console.log("Today is saturday");
    break;
  case "sunday":
    console.log("Today is sunday");
    break;
  default:
    console.log("Dunno what day it is today");
}
