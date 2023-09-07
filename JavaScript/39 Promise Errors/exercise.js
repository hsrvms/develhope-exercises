const isLogged = true;

function promise1(isLogged) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isLogged) {
        const randomNumber = Math.random();
        console.log(`Random number is: ${randomNumber}`);
        resolve(randomNumber);
      } else {
        reject(`You don't have access to see the random number`);
      }
    }, 1000);
  });
}

function promise2(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (number > 0.5) {
        const data = { name: "John", age: 24 };
        console.log(data);
        resolve(data);
      } else {
        reject(new Error("error ocurred in promise2"));
      }
    }, 1000);
  });
}

promise1(isLogged)
  .then(promise2)
  .catch((error) => {
    console.error(error);
  })
  .finally(() => console.log('Promise has done!'));
