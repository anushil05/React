//First node file
//for excess to entire express api
var express = require('express');

//Create our app
var app = express();

//to start a server
//1. Tell it which folder we want to serve

//app.use() help us to add functionality to our express application
//express.static() it we specify a folder name that we want to expose to the web server
app.use(express.static('public'));

//2. Start The server
//it takes the port Node, and the function that it will call
app.listen(3000, function () {
    console.log('Express Server is up on port 3000 ');
});