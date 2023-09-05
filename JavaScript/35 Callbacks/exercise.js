function repeatHello(callback) {
  const repeat = setInterval(callback, 1000);

  setTimeout(() => clearInterval(repeat), 10000)
}

repeatHello(() => {
  console.log("hello");
});

