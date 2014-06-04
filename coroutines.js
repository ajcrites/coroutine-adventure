var fs = require("fs"),
    co = require("co"),
    thunkify = require("thunkify"),
    request = require("request"),
    get = thunkify(request.get),
    post = thunkify(request.post),
    read = thunkify(fs.readFile),
    write = thunkify(fs.writeFile);

function *run() {
    try {
        var body = yield get("http://localhost:8917");

        yield write("./dls/co-foo", body[0].body);

        var fileContents = yield read("./dls/co-foo");

        yield write("./dls/co-bar", fileContents.toString().split("").reverse().join(""));

        var finalResult = yield post("http://localhost:8917");

        return finalResult[0].body;
    }
    catch (err) {
        console.log(err);
        console.log("error caught");
    }
}

co(function *() {
    var result = yield run;
    console.log(result);
})();

