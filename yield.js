var fs = require("fs");

function thunkedReadFile(path) {
    return function (done) {
        fs.readFile(path, done);
    }
}

var gen = (function *() {
    yield thunkedReadFile(__filename);
})();

gen.next();
