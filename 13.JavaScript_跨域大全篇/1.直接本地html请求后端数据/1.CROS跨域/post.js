var http = require("http");
http.createServer(function (req,res) {
    console.log(req.url);
    res.setHeader("Access-Control-Allow-Origin","*");//或者下面的也可以；
    // res.writeHead(200,{"Content-Type":"text/html","Access-Control-Allow-Origin":"*"});
    var allData = '';
    // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到allData变量中
    req.on('data', function(chunk){
        allData += chunk;
    });
    req.on('end', function(){
        console.log(allData);
        res.end(allData);
    });
}).listen(3000,function () {
    console.log("server is running")
});
