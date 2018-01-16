var express = require("express");
var app=express();



app.listen(8080, function(){
	console.log("Server has successfully started! Listening on port 8080.");
});

app.get('/', function(req,res) {
	res.render("home.ejs");
});

app.get("/fallinlovewith/:thing",function(req,res){
	var thing = req.params.thing;
	res.send("You fell in love with" + thing);
});

app.get('/home',function(req,res){
	res.send("Okay this works now");
});
