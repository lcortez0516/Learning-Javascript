//Default Values - provide default value - will be used if no value is provided

function countTo5(count) {
  // no value for count. the code will not run
  if (count === true) {
    for (let i = 1; i <= 5; i++) {
      console.log(`Count: ${i}`);
    }
  }
}

function countTo5(count = true) {
  // default value for count is true
  if (count === true) {
    for (let i = 1; i <= 5; i++) {
      console.log(`Count: ${i}`);
    }
  }
}

countTo5(); // parameter is not provided but the code runs
