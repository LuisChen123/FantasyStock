// Include React
import React, {Component} from "react";
// Including the Link component from React Router to navigate within our application without full page reloads
import { Link } from "react-router";
import navbar from "./navbar.js"; 
import footer from "./footer.js";
import apiHelper from "../apiHelper/apiHelper.js"; 

class Main extends Component {

  constructor(){
    super(); 
    this.state = {
      userFirstName: "",
      userLastName: "",
      userCashAvailable: 0,
      
    }

    this.getUser = this.getUser.bind(this); 
  }

  componentWillMount(){
    // Make api calls here and then set the state here. 
  }

  getUser(){

  }


    // Here we render the function
  render() {
    return (
      <div className = "container"> 
        <navbar /> 
          {props.children}
        <footer /> 
      </div> 
    ); 
  }
}


export default Main;
