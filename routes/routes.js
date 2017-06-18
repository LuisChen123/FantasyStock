// import dependencies 
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
	var userName = req.body.userName;
	var loginPassword = req.body.loginPassword; 

});
// This route is for dealing with new user sign up
router.post("/signUp", function(req, res){
	var firstName = 
	var lastName = 
	var age = 
	var grade = 
	var userName =
	var loginPassword = 
	var email = 
}); 

// send all other requests this. This will give the user the login page. 
router.get("*", function(req, res){
	res.sendFile(path.join(__dirname, "../public/loginPage.html"));
});

module.exports = router; 