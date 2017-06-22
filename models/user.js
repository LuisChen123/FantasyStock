// importing mongoose module
var mongoose = require("mongoose"); 
// pulling out schema 
var Schema = mongoose.Schema; 
// creating schema for db
var userSchema = new Schema({
	
	firstName: 
	{
    	type: String,
    	trim: true,
    	required: "First Name is Required"
  	},

  	lastName: 
  	{
    	type: String,
    	trim: true,
    	required: "Last Name is Required"
  	},

	age: Number,

	grade: Number, 

	username: 
	{
    	type: String,
    	trim: true,
    	required: "Username is Required"
  	},

	loginPassword: 
	{
		type: String,
		trim: true,
		required: "Password is Required"
	},

	email: String,

	cash: {type: Number, default: 1000},

	tradeHistory: 
		[{ 
			stockName: String,
			Date: {type: Date, default: Date.now},
			numberOfSharesPurchased: {type: Number, default: 0},
			numberOfSharesSold: {type: Number, default: 0},
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
		}],
		
	createdAt: {type: Date, default: Date.now}
}); 
// creating model for db
var userModel = mongoose.model("userModel", userSchema); 
// exporting model for outside use
module.exports = userModel; 
