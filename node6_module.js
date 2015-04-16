var fs = require('fs');
var path = require('path');

module.exports = function (directory, filter, callback) {
    fs.readdir(directory, function (err, list) {
        if (err)
            return callback(err);

        var data = [];
        for (var i = 0; i < list.length; ++i) {
            if (path.extname(list[i]) === "." + filter) {
                data.push(list[i]);
            }
        }
        callback(null, data);
    });
}
