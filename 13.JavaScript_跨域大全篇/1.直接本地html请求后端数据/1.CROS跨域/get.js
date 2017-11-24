//这里简单起见用原生node创建服务器
var http = require("http");
http.createServer(function (req,res) {
    res.setHeader("Access-Control-Allow-Origin","*");//或者下面的也可以；
    // res.writeHead(200,{"Access-Control-Allow-Origin":"*"});
    res.end("from server data")
}).listen(3000,"127.0.0.1",function () {
    console.log("server is running")
});
