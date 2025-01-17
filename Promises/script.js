// Promises - Object representing the eventual completion or failure of an asynchronous operation
//pending
//resolved .then()/.finally()
//rejected .then()/.cath()/.finally()

const checkNum = (num) => {
  //creating a promise
  return new Promise((resolve, reject) => {
    //operation that takes time to run
    if (num % 2 == 0) {
      //if success, run this resolve method
      resolve(num);
    } else {
      //if failed, run this reject method
      reject(`${num} is an odd number`);
    }
  });
};

//if success, run anything you want on the .then function, otherwise, on the catch function
checkNum(8)
  .then((num) => console.log(`Success: ${num}, ${typeof num}`))
  .catch((error) => console.log(`${error}`));
