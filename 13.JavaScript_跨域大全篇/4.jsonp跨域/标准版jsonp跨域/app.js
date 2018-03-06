var querystring = require('querystring');
var http = require('http');
 http.createServer(function(req,res){
     console.log(req.url)
     console.log(querystring.parse(req.url.split('?')[1]));
     var params = querystring.parse(req.url.split('?')[1]);
     var fn = params.callback;
     console.log(fn);
     // jsonp返回设置
     var obj = {
         name:'bob'
     };
     res.writeHead(200, { 'Content-Type': 'text/javascript' });
     res.write(fn + '(' + JSON.stringify(obj) + ')');
     res.end();

 }).listen(8000);
console.log('Server is running at port 8000...');