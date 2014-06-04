var fs = require("fs");

function thunkedReadFile(path) {
    return function (done) {
        fs.readFile(path, done);
    }
}

thunkedReadFile(__filename)(function (err, contents) {
    console.log(contents.toString());
});
