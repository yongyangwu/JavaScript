var express = require("express");
const app = express();
app.use(express.static('./'));
var port = 3000;
app.listen(port,()=>{
    console.log("server is running at " + port);
});
