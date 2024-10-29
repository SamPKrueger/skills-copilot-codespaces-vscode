// Create a web server
var express = require('express');
var app = express();
// Create a web server
var server = app.listen(3000, function(){
  console.log("Node.js is listening to PORT:" + server.address().port);
});
// Create a routing
app.get("/", function(req, res, next){
  res.send("Hello World");
});
app.get("/comments", function(req, res, next){
  res.send("This is a comment page");
});