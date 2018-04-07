var dbManager = require("../models/dbManager.js");
var express = require("express");
var path = require("path"); 

var apiRoutes = require("./apiRoutes");

var router = new express.Router(); 

router.use("/api", apiRoutes);

router.post("/logIn", dbManager.userModel_AuthenticateUser);

router.post("/signUp", function(req, res){
	console.log("this is signup")
	console.log(req.body);
	dbManager.userModel_SaveUser(req, res); 
}); 

router.get("/react", function(req, res){
	console.log("working      line 23 routes.js");
	res.sendFile(path.join(__dirname,"../public/react.html"));
})

router.get("/getInfo", dbManager.getInfo);

module.exports = router; 
