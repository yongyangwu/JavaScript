var http = require("http");
var url = require("url");
var querystring = require("querystring")
http.createServer(function (req,res) {
    // var urlPath = url.parse(req.url).pathname;
    console.log(req.url);
    var qs = querystring.parse(req.url.split('?')[1]);
    console.log(qs);
    var data = {
        "name": "bob"
    };
    data = JSON.stringify(data);
    var callback = qs.callback+'('+data+');';
    console.log(typeof callback);
    res.end(callback)
}).listen(3000,"127.0.0.1",function () {
    console.log("server is running")
});