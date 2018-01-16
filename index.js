var express = require("express");
var app=express();

app.listen(8080, function(){
	console.log("Server has successfully started!");
});

app.get('/', function(req,res) {
	res.send('Hello World!');
});
