var http = require("http");
var url = require("url");
var querystring = require("querystring")
var server = http.createServer(function (req,res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    // var urlPath = url.parse(req.url).pathname;
    // console.log(urlPath);
    // var qs = querystring.parse(req.url.split('?')[1]);
    // console.log(qs);
    // var data = {
    //     "name": "Monkey"
    // };
    // data = JSON.stringify(data);
    // var callback = qs.callback+'('+data+');';
    res.end("test({name:'bob'})");
}).listen(8000);
