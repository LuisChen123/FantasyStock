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
    	var body = req.body;
    	bcrypt.genSalt(10, function(err, salt) {
      		bcrypt.hash(body.password, salt, function(err, hash) {
        		// Store hash in your password DB.
        		userModel.create({
          			username: body.name,
          			loginPassword: hash,
          			firstName: body.firstName,
          			lastName: body.lastName,
          			age: body.age,
          			grade: body.grade,
          			email: body.email
        		})
        		.then(function(err, user) {
        			if(err){
        				res.json(err);
        			}
          			else{
          				res.sendFile(path.join(__dirname,"../public/react.html"));
          			}
        		});
      		});
    	});
  	},

  	userModel_AuthenticateUser: function(req, res) {
    //query for password where username = req.body.username
    	bcrypt.compare(req.body.password, queryResults, function(err, bcryptRes) {
      		if (bcryptRes) {
        		res.sendFile(path.join(__dirname,"../public/react.html"));
      		} 
      		else {
        		res.json(false);
      		}
    	});
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