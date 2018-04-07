var userModel = require("./user.js"); 
var leagueModel = require("./league.js"); 
var bcrypt = require("bcryptjs"); 
var path = require("path");
var dbManager = {
  
  leagueModel_GetLeague: function(req, res){
    var leagueID = req.body.leagueID; 
    leagueModel.findOne({id:leagueID})
    .populate("LeagueUser")
    .exec((err, result)=>{
      if(err){
        console.log("line 15+++++++++++++", err);
      }
      console.log(result); 
      res.json(result); 
    }); 
  }, 

  leagueModel_CreateLeague: function(req, res){
    var username = req.cookies.SSID; 
    leagueModel.create({})
    .then(function(league){
        console.log("line >>>>>>>>13, ", league);
        userModel.update({username: username}, {$set: {leagueID: league._id}}, 
          function(err, result){
            if(err){
              res.json(err); 
              console.log("Line >>>>>>>>>>>>>>>>>>>31 dbManger.js", err);
            }
            leagueModel.update({id: league._id}, {$set:{LeagueUser:result._id}},function(){
               res.json(league); 
               console.log("Line >>>>>>>>>>>>>35 dbManager.js", result);
             }); 
          }
        ); 
    });
  },

  leagueModel_JoinLeague: function(req, res){
    var username = req.cookies.SSID; 
    var leagueID = req.body.leagueID; //coordinate with frontend on var name
    console.log("line 45+++++++++", leagueID); 
    userModel.update({"username": username}, {$set: {leagueID: leagueID}}, function(err, result){
      if(err){
        console.log("line 48++++++++++++", err); 
        res.json(err); 
      }
      leagueModel.update({id:leagueID}, {$set:{LeagueUser: result._id}}, function(){
        console.log("line 52+++++++++++", result); 
        res.json(result); 
      }); 
    }); 
  },

  leagueModel_GetUserLeague: function(req, res){
    var username = req.cookies.SSID; 
    userModel.findOne({"username": username}).exec(function(err, result){
      if(err){
        res.json(err); 
      }
      else{
        var leagueID = result.leagueID; 
        leagueModel.findOne({_id: leagueID})
        .populate("LeagueUser")
        .exec(function(err, league){
          if(err){
            res.json(err); 
          }
          else{
            res.json(league); 
          }
        });
      }   
    });
  }, 

	getInfo: function(req,res){
		var name = req.cookies.SSID;
		userModel.findOne({"username": name}).exec(function(err, result){
			res.send(result);
		})
	},

	userModel_SaveUser: function(req, res) {

    var body = req.body;
		console.log("this is userModel_SaveUser" )
    	bcrypt.genSalt(10, function(err, salt) {
      		bcrypt.hash(body.PassWord, salt, function(err, hash) {
				  console.log(body.PassWord)
        		// Store hash in your password DB.
        		userModel.create({
          			username: body.UserName,
          			loginPassword: hash,
          			firstName: body.FirstName,
          			lastName: body.LastName,
          			age: body.Age,
          			grade: body.Grade,
          			email: body.EmailAddress
        		})
        		.then(function(err, user) {
        			if(err){
        				res.json(err);
        			}
          			else{;
          				 console.log("working")
          				res.redirect("/react");
          			}
        		});
      		});
    	});
  	},

  	userModel_AuthenticateUser: function(req, res) {
		userModel.find({"username":req.body.UserName}).exec(function(err,result){	
			if(!result.length){      //both wrong
				// console.log("working in here");
				res.send("/");
			}
			else{
			var dbPassword = result[0].loginPassword;
			console.log(dbPassword + "53");
    		bcrypt.compare(req.body.PassWord, dbPassword, function(err, bcryptRes) {
				console.log(bcryptRes + "          55");
      			if (bcryptRes) {

      				res.cookie("SSID", req.body.UserName);

      				res.send('/react');
       			
      			}	 
      			else {
        			res.send('/');
					
      			}
    		});
			}
		});
	}, 

	userModel_PostTradeUpdate: function(req, res){
		console.log("updated stock portfolio ", req.body.updatedStockPortfolio); 
		console.log("updated tradeHistory ", req.body.updatedTradeHistory); 
		console.log("updated Cash $",req.body.updatedCash);
		
		console.log("updated trade history after parseInt",req.body.updatedTradeHistory);
		var username = req.cookies.SSID;
		console.log(username);
		console.log("dbManager.js, line 104"); 
		userModel.update({username: username}, 
						 {$set: {cash:parseFloat(req.body.updatedCash), tradeHistory: req.body.updatedTradeHistory, portfolio: req.body.updatedStockPortfolio}},
						 function(error, edited) { 
    							if (error) {
      								console.log(error);
      								res.send(error);
    							}
    							else {
      								console.log(edited);
      								res.send(edited);
    							}
  						 }
  		);

	}

}

module.exports = dbManager; 
