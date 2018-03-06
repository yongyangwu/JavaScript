var http = require("http");
var server = http.createServer(function (req,res) {
    res.end("jsonp({name:'bob'})");
}).listen(8000);
