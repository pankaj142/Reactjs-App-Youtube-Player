var express = require("express");
var path    = require("path");
var port    = process.env.PORT || 3000;
var app =express();
var bodyParser = require("body-parser");


//middleware
app.use(express.static(__dirname));

//for all other routes
app.get('*', (req,res)=> {
  res.sendFile(path.resolve(__dirname + 'index.html'));
});

//server listen
app.listen(port,()=>{
  console.log("server is listening on ", port)});