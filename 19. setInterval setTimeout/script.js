//Interval - executes a code for every given interval

// setInterval(
//   () => console.log(`This function will be executed every 2 sec`),
//   2000
// );

//setTimeOut- used to executed a code after a specified time
// setTimeout(
//   () => console.log(`This function will be executed after 3 sec`),
//   3000
// );

//clearInterval = stops the code from running
const intervalID = setInterval(
  () => console.log(`This function will be executed every 1 sec`),
  1000
);

//stops the interval after 10 sec
setTimeout(() => clearInterval(intervalID), 10000);
