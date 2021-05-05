var fs = require("fs");

fs.readFile("sample.txt", (err, data) => {
  if (err) {
    return console.error(err);
  }
  return console.log(data.toString());
});

console.log("program ends");
