var express = require("express");
var app=express();

app.set('view engine', 'ejs');

app.get('/', function(req,res) {
	res.redirect("/home");
});

app.get('/about', function(req,res){
	res.render("pages/about",{title: "About Me"});
});
app.get('/home',function(req,res){
	res.render("pages/home", {title: 'Home'});
});

app.listen(80,function(){
	console.log(process.env.IP);
	console.log("Server has successfully started!");
 });
