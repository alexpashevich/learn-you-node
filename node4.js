var fs = require('fs');
var path = process.argv[2];
fs.readFile(path, 'utf8', function(err, data) {
    if (err) {
        console.log('error happened');
    }
    var arr = data.split('\n');
    console.log(arr.length - 1);
});
