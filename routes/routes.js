// import dependencies 
var express = require("express");
var path = require("path"); 
// import other route groups
var apiRoutes = require("./apiRoutes");
// create new instance of router
var router = new express.Router(); 

//if route starts with api, use apiRoutes module
router.use("/api", apiRoutes);

// send all other requests this
router.get("*", function(req, res){
	res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router; 