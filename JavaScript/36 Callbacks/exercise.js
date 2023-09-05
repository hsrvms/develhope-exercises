const repeatHello = (callback) => {
  const interval = setInterval(callback, 500);
  setTimeout(() => clearInterval(interval), 5000);
};

repeatHello(() => {
  console.log("Hello");
});
