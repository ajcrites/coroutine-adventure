var http = require("http"),
    fs = require("fs");

var server = http.createServer(function (req, res){
    console.log("request received");
    if (req.method.toLowerCase() === "get") {
        fs.createReadStream(__filename).pipe(res);
    }
    else {
        res.writeHead(201);
        res.end("posted");
    }
});

server.listen(8917);
