var mymodule = require('./node5_export.js')
var path = process.argv[2];
var suffix = process.argv[3];
mymodule(path, suffix, function (err, list) {
    list.forEach(function (i) {
        console.log(i);
    });
});