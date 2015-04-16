var fs = require('fs');
var dir = args[2];
var ext = '.' + args[3];
fs.readdir(dir, function (err, list) {
    list.forEach(function (file) {
        if (file.indexOf(ext) !== -1)
            console.log(file);
    });
});