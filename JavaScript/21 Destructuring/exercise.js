
const numberArray = [10, 20]
let [num1, num2] = numberArray;
console.log('Before swap: ', num1, num2); // Before swap: 10 20

// Variable swapping
[num2, num1] = numberArray;

console.log('After swap: ', num1, num2); // After swap: 20 10