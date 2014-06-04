var fs = require("fs");

try {
    fs.readFile("nonextant file", function (err, done) {
        if (err) {
            throw err;
        }
    });
}
catch (e) {
    console.log("error was caught");
}
