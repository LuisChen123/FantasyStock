// bringing articleModel in
var userModel = require("./user.js"); 
var bcrypt = require("bcryptjs"); 
var path = require("path");
// create single dbManger
var dbManager = {

	getInfo: function(req,res){
		var name = req.cookies.SSID;
		// console.log(req.cookies.SSID, "          dbmanager line 9");
		userModel.findOne({"username": name}).exec(function(err, result){
			// console.log(result);
			res.send(result);
		})
	},

	userModel_SaveUser: function(req, res) {

		// console.log(req.body+ "this is 18")
    	var body = req.body;
		console.log("this is userModel_SaveUser" )
    	bcrypt.genSalt(10, function(err, salt) {
			// console.log('salt', salt);
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
    // query for password where username = req.body.username
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

		// req.body.updatedTradeHistory.forEach(a=>a.sharePrice = parseInt(a.sharePrice.stockPrice)); 
		
		console.log("updated trade history after parseInt",req.body.updatedTradeHistory);
		var username = req.cookies.SSID;
		console.log(username);
		console.log("dbManager.js, line 104"); 
		userModel.update({username: username}, 
						 {$set: {cash:parseFloat(req.body.updatedCash), tradeHistory: req.body.updatedTradeHistory, portfolio: req.body.updatedStockPortfolio}},
						 function(error, edited) { 
    							// Log any errors from mongojs
    							if (error) {
      								console.log(error);
      								res.send(error);
    							}
    							// Otherwise, send the mongojs response to the browser
    							// This will fire off the success function of the ajax request
    							else {
      								console.log(edited);
      								res.send(edited);
    							}
  						 }
  		);

	}

}

module.exports = dbManager; 