const fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', (error, data) => {console.log(data.toString().split("\n").length - 1)});
