// var express = require("express");
// const app = express();
// app.get('/api',function (req,res) {
//     res.send('this is data from server');
// });
// var port = 3001;
// app.listen(port,()=>{
//     console.log("server is running at " + port);
// });

//这里简单起见用原生node创建服务器
var http = require("http");
var port = 3001;
http.createServer(function (req,res) {
    res.setHeader("Access-Control-Allow-Origin","*");//或者下面的也可以；
    // res.writeHead(200,{"Access-Control-Allow-Origin":"*"});
    res.end("from server data")
}).listen(port,"127.0.0.1",function () {
    console.log("server is running at "+ port);
});

