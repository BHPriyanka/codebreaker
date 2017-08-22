var express = require("express");
var app     = express();
var path    = require("path");

app.use("/src/", express.static(__dirname + '/src'));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname, 'src/index.html'));
});

app.listen(3000);



console.log("Running at Port 3000");
