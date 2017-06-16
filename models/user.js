// importing mongoose module
var mongoose = require("mongoose"); 
// pulling out schema 
var Schema = mongoose.Schema; 
// creating schema for db
var userSchema = new Schema({
	firstName: String,
	lastName: String,
	cash: Number,
	portfolio: [{
		type: Schema.Types.ObjectId,
		ref: "portfolioModel"
	}],
	dateAccountCreated: {type: Date, default: Date.now}
}); 
// creating model for db
var userModel = mongoose.model("userModel", userSchema); 
// exporting model for outside use
module.exports = userModel; 
