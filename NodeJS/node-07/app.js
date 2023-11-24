const figlet = require('figlet');

figlet('KaiZeN', function (err, data) {
  if(err){
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
})