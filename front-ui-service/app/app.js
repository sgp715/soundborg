var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send("Hello, world! How is it going");
});

app.listen('3000', function(){
    console.log("Opening server on port 3000");
});
