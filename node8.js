var http = require('http');

http.get(process.argv[2], function(response) {
    response.setEncoding('utf8');
    var str = "";
    response.on('data', function(data) {
        str = str + data;
    });
    response.on('end', function(data) {
        console.log(str.length);
        console.log(str);
    });
});