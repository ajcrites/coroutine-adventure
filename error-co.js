var fs = require("fs"),
    co = require("co");

co(function *() {
    try {
        yield read("nonextant file");
    }
    catch (e) {
        console.log("error caught");
    }
})();









function read (path) {
    return function (done) {
        fs.readFile(path, 'utf8', done);
    }
}
