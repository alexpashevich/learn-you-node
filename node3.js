var fs = require('fs');
var path = process.argv[2];
var buf = fs.readFileSync(path);
var str = buf.toString();
var arr = str.split('\n');
console.log(arr.length - 1);