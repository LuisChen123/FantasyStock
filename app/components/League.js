import React, {Component} from "react"; 
import apiHelper from "../apiHelper/apiHelper.js"; 

class League extends Component {
	constructor(){
		super(); 
		this.state = {
			leagueID: "",
			joinID: "", 
			leaguePlayerInfo: []
		};
		this.createLeagueID = this.createLeagueID.bind(this); 
		this.joinLeague = this.joinLeague.bind(this); 
		this.handleChange = this.handleChange.bind(this); 
	}

	handleChange(event) {
    		var newState = {};
    		newState[event.target.id] = event.target.value;
    		this.setState(newState);
  	}

	componentDidMount(){
		apiHelper
		.getInfo()
		.then((res) =>{
			if(res.data.leagueID){
				console.log("line --------------18"); 
				this.setState({leagueID: res.data.leagueID});
				apiHelper
				.getLeague(this.leagueID)
				.then((res)=>{
					console.log(res); 
				}); 
			}
			else{
				console.log("line ----------------22"); 
				this.setState({leagueID: "empty"});
			}
		}); 
	}

	createLeagueID(){
		apiHelper
		.createLeagueID()
		.then((res)=>{
			console.log("line 43>>>>>>>>", res); 
			this.setState({leagueID: res.data._id});
		}); 
	}

	joinLeague(){
		console.log("line 50+++++++", this.state.leagueID);
		apiHelper
		.joinLeague(this.state.joinID.trim())
		.then((res)=>{
			console.log("line 54+++++++++++++ ", res);
		});
	}

	render(){
		return(
			<div> 
				<span className="label label-danger"> League ID: {this.state.leagueID} </span>
				<div className="btn-group" role="group" aria-label="...">
  					<button type="button" className="btn btn-default" onClick={()=>this.createLeagueID()}>Create League</button>
  					<button type="button" className="btn btn-default" onClick={()=>this.joinLeague()}>Join League</button>
			  		<input
			          value={this.state.joinID}
			          type="text"
			          placeholder="Enter the league id that you wish to join."
			          className="form-control text-center"
			          id="joinID"
			          onChange={this.handleChange}
			          required/>
				</div>
			</div> 
		); 
	}	

}

export default League; 
