// import dependencies 
var dbManager = require("../models/dbManager.js");
var express = require("express");
var path = require("path"); 

// import other route groups
var apiRoutes = require("./apiRoutes");
// create new instance of router
var router = new express.Router(); 

//	This route deals with anything interacting with the database.
router.use("/api", apiRoutes);
//	this route is for verifying user login info
router.post("/logIn", function(req, res){
	// var userName = req.body.userName;
	// var loginPassword = req.body.loginPassword; 
	dbManager.userModel_AuthenticateUser(req, res); 
});
// This route is for dealing with new user sign up
router.post("/signUp", function(req, res){
	
	dbManager.userModel_SaveUser(req, res); 
}); 

// send all other requests this. This will give the user the login page. 
router.get("*", function(req, res){
	res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router; 