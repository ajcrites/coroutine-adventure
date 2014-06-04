var fs = require('fs');

var gen = (function *() {
    try {
        yield read("nonextant file");
    }
    catch (e) {
        console.log("error caught");
    }
})();

var ret = gen.next();
ret.value(function (err) {
    if (err) {
        gen.throw(err);
    }
});

function read (path) {
    return function (done) {
        fs.readFile(path, 'utf8', done);
    }
}
