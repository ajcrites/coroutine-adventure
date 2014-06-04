var fs = require('fs');

var gen = (function *() {
    var a, b, c;

    a = yield read("./td/a");
    b = yield read("./td/b");
    c = yield read("./td/c");

    console.log(a);
    console.log(b);
    console.log(c);
})();

function next(err, res) {
    var value = gen.next(res);
    if (value.done) {
        return;
    }
    value.value(next);
}
next();

function read (path) {
    return function (done) {
        fs.readFile(path, 'utf8', done);
    }
}
