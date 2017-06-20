// bringing articleModel in
var userModel = require("./user.js"); 
var bcrypt = require("bcryptjs"); 
var path = require("path");
// create single dbManger
var dbManager = {

	userModel_GetUserInfo: function(cb){
		userModel.find({}, function(err, info){
			if(err){
				console.log(err);
			}
			cb(info); 
		});
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
				res.send("/logIn");
			}
			else{
			// console.log(result[0].loginPassword + "   49");
			// console.log(req.body.PassWord + "       52");
			var dbPassword = result[0].loginPassword;
			console.log(dbPassword + "53");
    		bcrypt.compare(req.body.PassWord, dbPassword, function(err, bcryptRes) {
				console.log(bcryptRes + "          55");
      			if (bcryptRes) {
      				// console.log(req.body.UserName, "        line 66");
      				res.cookie("SSID", req.body.UserName);
      				
      				console.log(req.cookies, "           dbmanager line65");
      				var cookie = req.cookies;
      				console.log(cookie.SSID, "                dbmanager line67")
      				// console.log("dbManager line 65 res ",res);
      				res.send('/react');
      				
        			
      			}	 
      			else {
      				console.log("line 71")
        			res.send('/logIn');
					
      			}
    		});
			}
		});

		// var body = req.body;
		// bcrypt.genSalt(10, function(err, salt) {
      	// 	bcrypt.hash(body.PassWord, salt, function(err, hash) {
		// 		  console.log(body.UserName + "  " + hash + " line 67 ");
		// 		userModel.findOne({"username":body.UserName, "loginPassword": hash},function(err,result){
		// 			console.log(result + "49");
		// 		});	
		// 	});
  		// });
	}
	/*
	// will check to see if user has the money to make the purchase, if so then user info will be updated,
	// if not, user will be alerted. 
	User_WillTakeCareOfUserRequest: function(userId, shareName, sharePrice, cb){
		
		var userId = this.User_GetAll().then( (res) => {
			if(res.cash>=sharePrice){
				var updatedCashAmount = res.cash-sharePrice; 
				userModel.update({cash:{type:Number}})
				.then(()=>{
					userModel.insert({tradeHistory: {}}, $push: {tradeHistory: updatedCashAmount})
					.then((doc)=>{
						cb(doc);
					}); 
				});
			}
			else{
				cb("You Dont Have Enough Cash To Make This Purchase");
			}
		});
	
	}, 
	// Users_InsertNew: function(articleID, url, cb){
	// 	articleModel.create({
	// 		articleID: articleID, 
	// 		url: url
	// 	}, function(err, info){
	// 		if(err){
	// 			console.log(err);
	// 		}
	// 		cb(info); 
	// 	}); 
	// }, 

	// Users_Update: function(id, cb){
	// 	articleModel.findOneAndUpdate({_id: id}, function(err, info){
	// 		if(err){
	// 			console.log(err);
	// 		}
	// 		cb(info); 
	// 	});
	// },

	// Users_Delete: function(id, cb){
	// 	articleModel.remove({_id:id}, function(err, info){
	// 		if(err){
	// 			console.log(err);
	// 		}
	// 		cb(info);
	// 	});
	// }
	*/
}

module.exports = dbManager; 