// bringing articleModel in
var userModel = require("./user.js"); 
// create single dbManger
var dbManager = {
	getUserInfo: function(cb){
		userModel.find({}, function(err, info){
			if(err){
				console.log(err);
			}
			cb(info); 
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
		*/
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
	
}

module.exports = dbManager; 