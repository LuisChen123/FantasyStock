// import dependencies
var express = require("express");
// import dbManager 
var dbManager = require("../models/dbManager.js"); 
// get an instance of the router object
var router = new express.Router(); 

router.get("/saved", function(req, res){
	dbManager.getUserInfo(function(info){
		res.send(info); 
	}); 
});

// router.post("/saved", function(req, res){
// 	console.log("inside post /saved");
// 	var articleID = req.body.id;
// 	var url = req.body.url;
// 	dbManager.articleModel_InsertNew(articleID, url, function(info){
// 		console.log(info);
// 		res.send(info); 
// 	});
// });

// router.delete("/saved/:id", function(req, res){
// 	var id = req.params.id; 
// 	dbManager.articleModel_Delete(id, function(info){
// 		res.send(info);
// 	});
// }); 

module.exports = router;