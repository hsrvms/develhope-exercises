const number = Number.parseInt(Math.random() * 30);
console.log(number);

const promise = new Promise((resolve, reject) => {
  if (number > 15) {
    resolve(`Success! Number: ${number}`);
  } else {
    reject(`Error! Number: ${number}`);
  }
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
