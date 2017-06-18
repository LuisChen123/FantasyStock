// importing mongoose module
var mongoose = require("mongoose"); 
// pulling out schema 
var Schema = mongoose.Schema; 
// creating schema for db
var userSchema = new Schema({
	
	firstName: String,
	lastName: String,
	age: Number,
	grade: Number, 
	userName: 
	loginPassword:
	email: 
	cash: Number,
	tradeHistory: 
		[{ 
			stockName: String,
			Date: Date.now,
			numberOfSharesPurchased: Number,
			sharePrice: 
				{	
					type: Number, 
					required: true,
					validate:
						{
						 	validator: Number.isInteger,
						 	message: "{VALUE} is not an integer value"
						}
				}
		}],
	portfolio: 
		[{
			stockName: String,
			shareCount: Number
		}]
	createdAt: {type: Date, default: Date.now}
}); 
// creating model for db
var userModel = mongoose.model("userModel", userSchema); 
// exporting model for outside use
module.exports = userModel; 
