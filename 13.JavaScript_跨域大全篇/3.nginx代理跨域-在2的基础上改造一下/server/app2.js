var express = require("express");
const app = express();
app.get('/',function (req,res) {
    res.send('this is data from server');
});
var port =3001;
app.listen(port,()=>{
    console.log("server is running " + port);
});
