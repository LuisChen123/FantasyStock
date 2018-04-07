var express = require("express");
var dbManager = require("../models/dbManager.js"); 
var router = new express.Router(); 

router.get("/saved", function(req, res){
	dbManager.getUserInfo(function(info){
		res.send(info); 
	}); 
});

router.post("/getleague", dbManager.leagueModel_GetLeague); 

router.post("/createleague", dbManager.leagueModel_CreateLeague); 

router.post("/joinleague", dbManager.leagueModel_JoinLeague); 

router.get("/league", dbManager.leagueModel_GetUserLeague);

router.post("/update", dbManager.userModel_PostTradeUpdate);

module.exports = router;
