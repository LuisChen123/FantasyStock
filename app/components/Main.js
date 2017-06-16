// Include React
import React, {Component} from "react";
// Including the Link component from React Router to navigate within our application without full page reloads
import { Link } from "react-router";
import apiHelper from "../apiHelper/apiHelper.js"; 

class Main extends Component {

  constructor(){
    super(); 
    this.state = {
      user: 
    }

    this.getAllUser = this.getAllUser.bind(this); 
  }

  getAllUser(){

  }


    // Here we render the function
  render() {
    return (
      <div className = "container"> 

      </div> 
    ); 
  }
}


export default Main;
