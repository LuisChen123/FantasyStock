// bringing articleModel in
var userModel = require("./user.js"); 
// create single dbManger
var dbManager = {
	User_GetAll: function(cb){
		userModel.find({}, function(err, info){
			if(err){
				console.log(err);
			}
			cb(info); 
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
	
}

module.exports = dbManager; 