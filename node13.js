var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
    var parsedUrl = url.parse(req.url, true);
    var d = new Date(parsedUrl.query.iso);
    //var unixtime = d.getTime();
    //var isotime = d.toISOString();
    var dict = {};
    res.writeHead(200, { 'Content-Type': 'application/json' });
    if (url.parse(req.url, true)['pathname'] == '/api/parsetime') {
        dict['hour'] = d.getHours();
        dict['minute'] = d.getMinutes();
        dict['second'] = d.getSeconds();
    } else {
        dict['unixtime'] = d.getTime();
    }
    res.write(JSON.stringify(dict));
    //res.write(res.url);
    res.end();
});
server.listen(process.argv[2]);