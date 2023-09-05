function sumUntil(maxValue) {
  if(maxValue === 1) return 1;

  return maxValue + sumUntil(maxValue-1);
}

console.log(sumUntil(5));