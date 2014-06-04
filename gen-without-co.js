var fs = require('fs');

var gen = (function *() {
    var a = yield read(__filename);
    console.log(a.toString());
})();

var ret = gen.next();
ret.value(function (err, res) {
    gen.next(res);
});

function read(path) {
    return function (done) {
        fs.readFile(path, 'utf8', done);
    }
}
