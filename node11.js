var http = require('http');
var fs = require('fs');

var filestream = fs.createReadStream(process.argv[3]);

var server = http.createServer(function(req, res) {
    filestream.pipe(res);
});
server.listen(process.argv[2]);