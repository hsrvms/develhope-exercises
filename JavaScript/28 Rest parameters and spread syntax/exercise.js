function sum(...numbers) {
  return numbers.reduce((acc, number) => acc + number, 0);
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));
