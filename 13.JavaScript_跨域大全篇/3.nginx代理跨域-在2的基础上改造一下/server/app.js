var http = require('http');
http.createServer(function (request, response) {
    // response.setHeader("Access-Control-Allow-Origin","*");//或者下面的也可以；
    response.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'});
    response.end("this is data from node server ");
}).listen(3001,function () {
    // 终端打印如下信息
    console.log('Server running at 3001');
});

