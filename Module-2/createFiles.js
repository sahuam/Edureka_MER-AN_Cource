var fs = require("fs");

var files = process.argv;

console.log(files);

var fileNames = files.filter((_, i) => i > 1);

fileNames.map((file) =>
  fs.writeFile(file + ".txt", `This is ${file}.txt`, (err) => console.log(err))
);
