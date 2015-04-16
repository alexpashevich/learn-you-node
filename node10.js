var net = require('net');

var server = net.createServer(function(socket) {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    var h24 = today.getHours();
    var m60 = today.getMinutes();

    var curtime = "" + yyyy + "-0" + mm + "-" + dd + " 0" + h24 + ":" + m60 + "\n";
    socket.write(curtime);
    socket.end();
});
server.listen(process.argv[2]);


