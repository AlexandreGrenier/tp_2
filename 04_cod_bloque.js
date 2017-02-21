var fs = require("fs");

var data = fs.readFileSync('04_fichier.txt');

console.log(data.toString());
console.log("program ended");