// Async Functions - designed to run in the background while other code continues to execute.
//Await Operator - used to wait for a promise. It can only be used inside an async function within regular javascript code

function fetchDataFromServer() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("User Data Retrieved");
    }, 4000);
  });
}

async function getUserData() {
  try {
    //waits for the promise to be fulfilled
    const data = await fetchDataFromServer();
    console.log(data);
    console.log("remaining tasks can be executed here");
  } catch (error) {
    console.log(error);
  }
}

getUserData();
