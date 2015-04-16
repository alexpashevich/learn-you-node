var http = require('http');

var str_arr = [];
var dict = {};
dict[process.argv[2].substr(process.argv[2].length - 5)] = 0;
dict[process.argv[3].substr(process.argv[3].length - 5)] = 1;
dict[process.argv[4].substr(process.argv[4].length - 5)] = 2;
var counter = 0;
for (var i = 0; i < 3; ++i) {
    //console.log(process.argv[2 + i]);
    http.get(process.argv[2 + i], function(response) {
        //console.log(this._headers.host);
        var self = this;
        response.setEncoding('utf8');
        var str = "";
        response.on('data', function(data) {
            str = str + data;
        });
        response.on('end', function(data) {
            var index = dict[self._headers.host.substr(self._headers.host.length - 5)];
            str_arr[index] = str;
            ++counter;
            if (counter == 3) {
                str_arr.forEach(function(str) {
                    console.log(str);
                });
            }
        });
    });
}