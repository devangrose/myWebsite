var express = require("express");
var serveStatic = require("serve-static");
var app=express();
var request=require("request");


app.use(serveStatic('images'));
app.use(serveStatic('styles'));
app.set('view engine', 'ejs');




app.get('/', function(req,res) {
	res.redirect("/home");
});

app.get('/home', function(req,res){

	//request the current temperature in Seattle, Wa
	request('https://api.openweathermap.org/data/2.5/weather?zip=98101,us&apikey=ca5717e90c7e247434710b5bda9b332b', function (error, response, body) {
		//parse API response to an object
		var data = JSON.parse(body);
		var temperature = data.main.temp * 1.8 - 459.67;
		
		// Truncate the float
		temperature = temperature.toFixed(2);
		var toPass =  { title: "Home",
				temp: temperature } ;
		
		// Render the page with the information
		res.render("pages/home",{
			data: toPass});
		
		});

	//res.render("pages/home",{title: "Home"});
});
app.get('/about',function(req,res){

	var toPass = {title:'About me'};
	res.render("pages/about", {data: toPass});
});
app.get('/coding',function(req,res){

	var toPass = {title:'Coding'};
	res.render("pages/coding",{data: toPass});
});
app.listen(80,function(){
	console.log("Server has successfully started!");
 });
