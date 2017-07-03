var mongoose = require("mongoose"); 

var Schema = mongoose.Schema; 

var LeagueSchema = new Schema({
	LeagueUser: [{
		type: Schema.Types.ObjectId,
		ref: "userModel"
	}]
}); 

var leagueModel = mongoose.model("leagueModel", LeagueSchema); 

module.exports = leagueModel; 