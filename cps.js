var http = require("http"),
    fs = require("fs"),
    domain = require("domain"),
    d = domain.create();

d.on("error", function (err) {
    console.error("error caught");
});

d.run(function () {
    http.get({host: "localhost", port: 8917}, function (response) {
        if (response.statusCode != "200") {
            throw "error";
        }
        var body = "";

        response.on("data", function (chunk) {
            body += chunk;
        });

        response.on("end", function () {
            fs.writeFile("./dls/foo", body, function (err) {
                if (err) {
                    throw err;
                }

                fs.readFile("./dls/foo", function (err, contents) {
                    if (err) {
                        throw err;
                    }

                    fs.writeFile("./dls/bar", contents.toString().split("").reverse().join(""), function (err) {
                        if (err) {
                            throw err;
                        }

                        var req = http.request({hostname: "localhost", port: 8917, method: "POST"}, function (res) {
                            if (res.statusCode != "201") {
                                throw "error";
                            }

                            console.log("posted file");
                        });
                        req.end();
                    });
                });
            });
        });
    });
});
