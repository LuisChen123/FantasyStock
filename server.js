// dependencies 
var express = require("express"); 
var bodyParser = require("body-parser"); 
var bluebird = require("bluebird");
var logger = require("morgan");
var mongoose = require("mongoose");
var port = process.env.PORT || 3001;
var routes = require("./routes/routes.js"); 
var dbManager = require("./models/dbManager.js"); 
mongoose.Promise = bluebird;

var app = express();
app.use(express.static(__dirname + "/public"));
app.use(logger("dev"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use("/", routes);

if(process.env.MONGODB_URI){
	mongoose.connect(process.env.Mongodb_URI);
}
else{
	mongoose.connect("mongodb://localhost/fantasyStocks_db"); 
}

var db = mongoose.connection;

app.listen(port, function(){
	console.log("Server Listening On Port: "+port);
}); 
