var fs = require("fs"),
    thunkify = require("thunkify"),
    read = thunkify(fs.readFile),
    co = require("co");

co(function *() {
    var a = yield read(__filename);

    console.log(a.toString());
})();
