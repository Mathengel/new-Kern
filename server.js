 //DEPENDENCIES!!!!!!!!!!

var express = require("express");
var session = require('express-session');
var path = require('path');
var bodyParser = require('body-parser');


//SESSION CONFIG
var sessionConfig = {
 secret:'WhoKnows', // Secret name for decoding secret and such
 resave:false, // Don't resave session if no changes were made
 saveUninitialized: true, // Don't save session if there was nothing initialized
 name:'ourCookie', // Sets a custom cookie name
 cookie: {
  secure: false, // This need to be true, but only on HTTPS
  httpOnly: false, // Forces cookies to only be used over http
  maxAge: 3600000
 }
}

var app = express();

require('./server/config/mongoose.js')

// Use session with our app
app.use(session(sessionConfig));

//CONFIG APP!!!!!!!!!!!

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({extended:true}));
app.use(express.static(path.join(__dirname, "client")));
app.use(express.static(path.join(__dirname, "bower_components")));

app.use(function(req,res,next){
	console.log(req.session);
	next();
})

require('./server/config/routes.js')(app)

//LISTENING!!!!!!!

var port = 8000;
app.listen(port, function(){
    console.log("kickin' it on port", port);
})
