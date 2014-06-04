var fs = require("fs");

// Asynchronous I/O operation
fs.readFile(__filename, function () {
    console.log("executes after");
});
console.log("executes before");
