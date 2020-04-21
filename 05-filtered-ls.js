const fs = require("fs");
const path = require("path");

fs.readdir(process.argv[2], (err, list) => {
  list
    .filter((file) => path.extname(file) === `.${process.argv[3]}`)
    .forEach((file) => {
      console.log(file);
    });
});
