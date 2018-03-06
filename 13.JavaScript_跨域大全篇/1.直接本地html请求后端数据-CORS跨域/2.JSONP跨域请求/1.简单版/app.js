var http = require("http");
http.createServer(function (req,res) {
    res.end("test({name:'bob'})")
}).listen(3000,"127.0.0.1",function () {
    console.log("server is running")
});